// 간격 반복(안키식) 복습 주기 계산과 기록 저장
// 기록은 브라우저 저장소(localStorage)에 남아요. 나중에 AWS로 옮길 때는 load/save 두 함수만 바꾸면 돼요.

(function () {
  var KEY = "itword.srs.v1";
  var MIN = 60 * 1000;
  var DAY = 24 * 60 * MIN;
  var NEW_PER_DAY = 10; // 하루에 새로 배우는 카드 수

  var memory = null; // 저장소를 못 쓰는 환경을 위한 대비

  function load() {
    if (memory) return memory;
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) memory = JSON.parse(raw);
    } catch (e) { /* 저장소를 못 쓰면 메모리로만 동작 */ }
    if (!memory || typeof memory !== "object") memory = {};
    if (!memory.cards) memory.cards = {};
    if (!memory.newLog) memory.newLog = { date: "", count: 0 };
    return memory;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch (e) { /* 무시 */ }
  }

  function today(now) {
    var d = new Date(now);
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function newLeft(now) {
    var s = load();
    if (s.newLog.date !== today(now)) return NEW_PER_DAY;
    return Math.max(0, NEW_PER_DAY - s.newLog.count);
  }

  // 버튼을 눌렀을 때 카드의 다음 상태를 계산 (저장은 하지 않음)
  // rating: "again" 다시 / "hard" 어려움 / "good" 알아요 / "easy" 쉬워요
  function schedule(card, rating, now) {
    var c = card
      ? { interval: card.interval, ease: card.ease, step: card.step, reps: card.reps, lapses: card.lapses }
      : { interval: 0, ease: 2.5, step: 0, reps: 0, lapses: 0 };
    var wait; // 다음 복습까지 남은 시간(ms)

    if (c.interval === 0) {
      // 처음 배우는 중이거나 틀려서 다시 배우는 중
      if (rating === "again") { c.step = 0; wait = 1 * MIN; }
      else if (rating === "hard") { wait = 6 * MIN; }
      else if (rating === "good") {
        if (c.step === 0) { c.step = 1; wait = 10 * MIN; }
        else { c.interval = 1; wait = DAY; }
      } else { c.interval = 4; wait = 4 * DAY; }
    } else {
      // 이미 외운 카드를 복습하는 중
      if (rating === "again") {
        c.lapses += 1;
        c.ease = Math.max(1.3, c.ease - 0.2);
        c.interval = 0; c.step = 0; wait = 10 * MIN;
      } else {
        if (rating === "hard") {
          c.ease = Math.max(1.3, c.ease - 0.15);
          c.interval = Math.max(c.interval + 1, Math.round(c.interval * 1.2));
        } else if (rating === "good") {
          c.interval = Math.max(c.interval + 1, Math.round(c.interval * c.ease));
        } else {
          var good = Math.max(c.interval + 1, Math.round(c.interval * c.ease));
          c.interval = Math.max(good + 1, Math.round(c.interval * c.ease * 1.3)); // 항상 "알아요"보다 길게
          c.ease = c.ease + 0.15;
        }
        wait = c.interval * DAY;
      }
    }
    c.reps += 1;
    c.due = now + wait;
    c.wait = wait;
    return c;
  }

  function rate(id, rating, now) {
    var s = load();
    var isNew = !s.cards[id];
    var next = schedule(s.cards[id], rating, now);
    delete next.wait;
    s.cards[id] = next;
    if (isNew) {
      if (s.newLog.date !== today(now)) s.newLog = { date: today(now), count: 0 };
      s.newLog.count += 1;
    }
    save();
    return next;
  }

  // 지금 보여줄 다음 카드 id (없으면 null)
  function next(ids, now, skipId) {
    var s = load();
    var learning = [], review = [], fresh = [], waiting = [];
    ids.forEach(function (id) {
      var c = s.cards[id];
      if (!c) fresh.push(id);
      else if (c.interval === 0) (c.due <= now ? learning : waiting).push(id);
      else if (c.due <= now) review.push(id);
    });
    var byDue = function (a, b) { return s.cards[a].due - s.cards[b].due; };
    learning.sort(byDue); review.sort(byDue); waiting.sort(byDue);
    if (newLeft(now) <= 0) fresh = [];

    var order = learning.concat(review, fresh, waiting); // 기다리는 중인 카드는 다른 게 없을 때만 앞당겨 보여줌
    for (var i = 0; i < order.length; i++) if (order[i] !== skipId) return order[i];
    return order.length ? order[0] : null;
  }

  function counts(ids, now) {
    var s = load();
    var due = 0, unseen = 0, known = 0;
    ids.forEach(function (id) {
      var c = s.cards[id];
      if (!c) unseen += 1;
      else {
        if (c.due <= now || c.interval === 0) due += 1;
        if (c.interval >= 1) known += 1;
      }
    });
    return { due: due, fresh: Math.min(unseen, newLeft(now)), unseen: unseen, known: known, total: ids.length };
  }

  // 가장 가까운 다음 복습 시각 (없으면 null)
  function nextDue(ids) {
    var s = load(), best = null;
    ids.forEach(function (id) {
      var c = s.cards[id];
      if (c && (best === null || c.due < best)) best = c.due;
    });
    return best;
  }

  function label(ms) {
    if (ms < 60 * MIN) return Math.max(1, Math.round(ms / MIN)) + "분";
    if (ms < 23.5 * 60 * MIN) return Math.round(ms / (60 * MIN)) + "시간";
    var days = Math.max(1, Math.round(ms / DAY));
    if (days < 30) return days + "일";
    if (days < 365) return Math.round(days / 30) + "달";
    return (days / 365).toFixed(1) + "년";
  }

  function state(id) { return load().cards[id] || null; }

  function reset() {
    memory = { cards: {}, newLog: { date: "", count: 0 } };
    save();
  }

  window.SRS = {
    schedule: schedule, rate: rate, next: next, counts: counts,
    nextDue: nextDue, label: label, state: state, reset: reset
  };
})();
