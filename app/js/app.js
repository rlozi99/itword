// 화면 그리기와 이동
//   #/            C. 목록형 홈
//   #/card/<id>   A. 비교형 카드 / B. 에러 메시지 분해형 카드
//   #/study       암기: 카드를 마음껏 뒤집으면서 외우기 (A-2 / B-2). 덜 본 카드가 먼저 나옴
//   #/review      확인: 한 번 뒤집고 다시/어려움/알아요/쉬워요 고르기

(function () {
  var app = document.getElementById("app");
  var WORDS = window.WORDS;
  var IDS = WORDS.map(function (w) { return w.id; });
  var STAR = "★ 표시한 것";
  var FILTERS = ["전체", "뜻이 다른 단어", "자주 쓰는 표현", "에러 메시지", STAR];
  var RATES = [
    ["again", "다시"], ["hard", "어려움"], ["good", "알아요"], ["easy", "쉬워요"]
  ];

  // 홈 화면 상태: 검색어와 필터는 돌아와도 유지. selecting은 카드를 체크해서 고르는 중인지, picked는 고른 카드
  var home = { query: "", filter: "전체", selecting: false, picked: {} };
  var study = null;                          // 진행 중인 암기 (자유롭게 뒤집기)
  var session = null;                        // 진행 중인 확인 (복습 주기 평가)

  // ───── 별표와 "암기에서 본 횟수" 저장 (브라우저 저장소) ─────
  var PREFS_KEY = "itword.prefs.v1";
  var prefs = { stars: {}, seen: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(PREFS_KEY) || "null");
    if (saved && typeof saved === "object") {
      prefs.stars = saved.stars || {};
      prefs.seen = saved.seen || {};
    }
  } catch (e) { /* 저장소를 못 쓰면 이번 실행 동안만 기억 */ }
  function savePrefs() {
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (e) { /* 무시 */ }
  }
  function isStar(id) { return !!prefs.stars[id]; }
  function toggleStar(id) {
    if (prefs.stars[id]) delete prefs.stars[id]; else prefs.stars[id] = true;
    savePrefs();
  }
  function starBtn(id) {
    var on = isStar(id);
    return '<button class="icon star' + (on ? " on" : "") + '" data-star="' + esc(id) + '" aria-pressed="' + on +
      '" aria-label="별표" title="별표">' + (on ? "★" : "☆") + '</button>';
  }

  // ───── 영어 발음 듣기 (브라우저에 내장된 음성 사용) ─────
  var TTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  var SPEAKER = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
    '<path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  function speakBtn(w) {
    if (!TTS) return "";
    return '<button class="icon say" data-speak="' + esc(w.id) + '" aria-label="발음 듣기" title="발음 듣기">' + SPEAKER + '</button>';
  }
  function speak(id) {
    var w = find(id);
    if (!TTS || !w) return;
    var u = new SpeechSynthesisUtterance(w.type === "error" ? w.sentence : w.term);
    u.lang = "en-US";
    u.rate = 0.9;
    var voices = window.speechSynthesis.getVoices().filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    if (voices.length) u.voice = voices[0];
    window.speechSynthesis.cancel(); // 읽는 중이면 끊고 새로 읽기
    window.speechSynthesis.speak(u);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function find(id) {
    for (var i = 0; i < WORDS.length; i++) if (WORDS[i].id === id) return WORDS[i];
    return null;
  }
  function titleOf(w) { return w.type === "error" ? w.title : w.term; }
  function shortOf(w) { return w.type === "error" ? w.short : w.it; }

  // 에러 문장에서 패턴 부분만 강조
  function sentenceHtml(w) {
    var i = w.sentence.indexOf(w.hl);
    if (i < 0) return esc(w.sentence);
    return esc(w.sentence.slice(0, i)) + "<mark>" + esc(w.hl) + "</mark>" + esc(w.sentence.slice(i + w.hl.length));
  }

  // ───── 카드 본문 ─────

  // A. 비교형
  function wordCard(w) {
    return '' +
      '<div class="head"><div class="word"><h2 class="term">' + esc(w.term) + '</h2>' + speakBtn(w) + '</div>' +
        '<span class="tag">' + esc(w.tag) + '</span></div>' +
      '<div class="compare">' +
        '<div><small>일상에서</small>' + esc(w.everyday) + '</div>' +
        '<div class="it"><small>IT에서</small>' + esc(w.it) + '</div>' +
      '</div>' +
      '<div class="code">' + esc(w.example) + '</div>' +
      '<p class="note">' + esc(w.note) + '</p>';
  }

  // B. 에러 메시지 분해형
  function errorCard(w) {
    var parts = w.parts.map(function (p) {
      return '<div><dt>' + esc(p[0]) + '</dt><dd>' + esc(p[1]) + '</dd></div>';
    }).join("");
    return '' +
      '<div class="head"><span class="tag error">에러 메시지</span><span class="pattern">패턴 · ' + esc(w.pattern) + '</span></div>' +
      '<div class="code sentence"><span>' + sentenceHtml(w) + '</span>' + speakBtn(w) + '</div>' +
      '<p class="meaning">' + esc(w.meaning) + '</p>' +
      '<dl class="parts">' + parts + '</dl>' +
      '<p class="note">' + esc(w.note) + '</p>';
  }

  function cardBody(w) { return w.type === "error" ? errorCard(w) : wordCard(w); }

  // A-2 / B-2 앞면 (영어만)
  function frontBody(w, hint) {
    if (w.type === "error") {
      return '<span class="tag error">에러 메시지</span>' +
        '<div class="code sentence"><span>' + sentenceHtml(w) + '</span>' + speakBtn(w) + '</div>' +
        '<span class="hint">' + hint + '</span>';
    }
    return '<span class="tag">' + esc(w.tag) + '</span>' +
      '<div class="word"><h2 class="term">' + esc(w.term) + '</h2>' + speakBtn(w) + '</div>' +
      '<span class="hint">' + hint + '</span>';
  }

  // ───── C. 홈 ─────

  function matches(w) {
    if (home.filter === STAR) { if (!isStar(w.id)) return false; }
    else if (home.filter !== "전체" && w.tag !== home.filter) return false;
    var q = home.query.trim().toLowerCase();
    if (!q) return true;
    var text = [titleOf(w), shortOf(w), w.everyday, w.sentence, w.meaning, w.example].join(" ").toLowerCase();
    return text.indexOf(q) >= 0;
  }

  function pickedIds() {
    return IDS.filter(function (id) { return home.picked[id]; }); // 목록 순서 유지
  }

  function listHtml(shown) {
    var rows = shown.map(function (w) {
      var id = esc(w.id);
      var text = '<div><b>' + esc(titleOf(w)) + '</b><span>' + esc(shortOf(w)) + '</span></div>';
      if (home.selecting) {
        // 고르는 중: 줄을 누르면 체크
        var on = !!home.picked[w.id];
        return '<div class="row"><button class="rowmain" data-pick="' + id + '" aria-pressed="' + on + '">' +
          '<span class="check' + (on ? " on" : "") + '">' + (on ? "✓" : "") + '</span>' + text + '</button></div>';
      }
      return '<div class="row"><button class="rowmain" data-id="' + id + '">' + text + '<i>›</i></button>' + starBtn(w.id) + '</div>';
    }).join("");
    if (rows) return rows;
    return '<div class="empty">' + (home.filter === STAR && !home.query.trim()
      ? "아직 표시한 카드가 없어요. 목록이나 카드에서 ☆를 눌러 표시해 보세요."
      : "찾는 단어가 없어요.") + '</div>';
  }

  // "모두 선택" 버튼. 지금 목록에 보이는 카드를 전부 고르고, 이미 다 골랐으면 "모두 해제"로 바뀜
  function allBtn(shown, withCount) {
    var allOn = shown.length > 0 && shown.every(function (w) { return home.picked[w.id]; });
    return '<button class="link strong" data-all="1"' + (shown.length ? "" : " disabled") + '>' +
      (allOn ? "모두 해제" : "모두 선택") + (withCount ? ' (' + shown.length + '개)' : '') + '</button>';
  }

  // 목록 위 한 줄: 평소엔 개수와 "골라서 암기", 고르는 중엔 "모두 선택"과 "취소"
  function listbarHtml(shown) {
    if (!home.selecting) {
      return '<span class="muted">' + shown.length + '개</span><button class="link" id="pick">골라서 암기</button>';
    }
    return allBtn(shown, true) + '<button class="link" id="cancel">취소</button>';
  }

  // 고르는 중에 화면 아래에 떠 있는 막대. 목록을 내려도 "모두 선택"과 시작 버튼이 항상 보임
  function pickbarHtml(shown) {
    if (!home.selecting) return "";
    var n = pickedIds().length;
    return '<div class="pickbar"><span>' + n + '장 선택</span><span class="side">' + allBtn(shown, false) +
      '<button class="btn primary" id="go"' + (n ? "" : " disabled") + '>암기 시작</button></span></div>';
  }

  // 검색·체크·별표가 바뀔 때 목록 부분만 다시 그리기 (검색창 입력이 끊기지 않게)
  function refreshList() {
    var shown = WORDS.filter(matches);
    document.getElementById("listbar").innerHTML = listbarHtml(shown);
    document.getElementById("list").innerHTML = listHtml(shown);
    document.getElementById("pickslot").innerHTML = pickbarHtml(shown);
    var sub = document.getElementById("studysub");
    if (sub) sub.textContent = studyLabel();
  }

  function studyLabel() {
    var n = pickedIds().length;
    return home.selecting && n ? "선택한 " + n + "장 외우기" : "카드를 뒤집으면서 외우기";
  }

  function renderHome() {
    var c = SRS.counts(IDS, Date.now());
    var todo = c.due + c.fresh;
    var chips = FILTERS.map(function (f) {
      return '<button class="chip' + (f === home.filter ? " on" : "") + '" data-filter="' + f + '">' + f + '</button>';
    }).join("");

    app.innerHTML = '' +
      '<h1 class="title">IT 영어 단어장</h1>' +
      '<div class="modes">' +
        '<button class="mode" data-go="#/study"><b>암기</b><span id="studysub"></span></button>' +
        '<button class="mode" data-go="#/review"' + (todo ? "" : " disabled") + '><b>확인</b><span>' +
          (todo ? '복습 ' + c.due + '장 · 새 카드 ' + c.fresh + '장' : '오늘 확인 끝') + '</span></button>' +
      '</div>' +
      '<p class="muted known">외운 카드 ' + c.known + ' / ' + c.total + '</p>' +
      '<input class="search" id="search" type="search" placeholder="단어 검색" autocomplete="off" value="' + esc(home.query) + '">' +
      '<div class="chips">' + chips + '</div>' +
      '<div class="listbar" id="listbar"></div>' +
      '<div class="list" id="list"></div>' +
      '<div class="foot" id="foot"><button class="link" id="reset">복습 기록 초기화</button></div>' +
      '<div id="pickslot"></div>';
    refreshList();

    document.getElementById("search").addEventListener("input", function (e) {
      home.query = e.target.value;
      refreshList();
    });
    document.getElementById("reset").addEventListener("click", askReset);
  }

  // 홈에서 눌린 것 처리 (목록 부분은 계속 다시 그려지므로 한곳에서 받음)
  function homeClick(el) {
    if (el.id === "pick") { home.selecting = true; home.picked = {}; }
    else if (el.id === "cancel") { home.selecting = false; home.picked = {}; }
    else if (el.dataset.all) {
      var shown = WORDS.filter(matches);
      var allOn = shown.every(function (w) { return home.picked[w.id]; });
      shown.forEach(function (w) { if (allOn) delete home.picked[w.id]; else home.picked[w.id] = true; });
    }
    else if (el.id === "go") { location.hash = "#/study"; return; }
    else if (el.dataset.pick) {
      if (home.picked[el.dataset.pick]) delete home.picked[el.dataset.pick]; else home.picked[el.dataset.pick] = true;
    }
    else return;
    refreshList();
  }

  function askReset() {
    var foot = document.getElementById("foot");
    foot.innerHTML = '<span class="muted">복습 기록을 모두 지울까요?</span> ' +
      '<button class="link" id="yes">지우기</button><button class="link" id="no">취소</button>';
    document.getElementById("yes").addEventListener("click", function () { SRS.reset(); renderHome(); });
    document.getElementById("no").addEventListener("click", renderHome);
  }

  // ───── A / B. 학습 카드 ─────

  function renderCard(id) {
    var w = find(id);
    if (!w) { location.hash = "#/"; return; }
    var shown = WORDS.filter(matches);            // 목록에서 보던 순서대로 넘기기
    if (shown.indexOf(w) < 0) shown = WORDS;
    var i = shown.indexOf(w);
    var prev = shown[i - 1], next = shown[i + 1];

    app.innerHTML = '' +
      '<div class="topbar"><button class="link" data-go="#/">‹ 목록</button>' +
        '<span class="side"><span class="muted">' + (i + 1) + ' / ' + shown.length + '</span>' + starBtn(w.id) + '</span></div>' +
      '<div class="card">' + cardBody(w) + '</div>' +
      '<div class="pager">' +
        '<button class="btn" ' + (prev ? 'data-go="#/card/' + esc(prev.id) + '"' : "disabled") + '>‹ 이전</button>' +
        '<button class="btn" ' + (next ? 'data-go="#/card/' + esc(next.id) + '"' : "disabled") + '>다음 ›</button>' +
      '</div>';
  }

  // 카드가 돌아가는 애니메이션을 넣고 다시 그리기
  function turn(render) {
    var el = document.getElementById("flip");
    if (!el) { render(); return; }
    el.classList.add("turning");
    setTimeout(function () {
      render();
      var other = document.getElementById("flip");
      if (other) {
        other.classList.add("turning");
        void other.offsetWidth; // 애니메이션을 다시 시작시키기
        other.classList.remove("turning");
      }
    }, 140);
  }

  // ───── 암기: 마음껏 뒤집으면서 외우기 ─────

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function markSeen(id) {
    prefs.seen[id] = (prefs.seen[id] || 0) + 1;
    savePrefs();
  }

  function startStudy() {
    var ids = home.selecting ? pickedIds() : [];   // 골라 둔 카드가 있으면 그것만
    if (!ids.length) {
      var shown = WORDS.filter(matches);            // 없으면 홈에서 보던 목록(검색·분류) 그대로
      if (!shown.length) shown = WORDS;
      ids = shown.map(function (w) { return w.id; });
    }
    // 순서: 암기에서 덜 본 카드가 먼저. 본 횟수가 같으면 매번 무작위
    shuffle(ids);
    ids.sort(function (x, y) { return (prefs.seen[x] || 0) - (prefs.seen[y] || 0); });
    study = { ids: ids, i: 0, flipped: false };
    markSeen(ids[0]);
    renderStudy();
  }

  function renderStudy() {
    var w = find(study.ids[study.i]);
    var card = study.flipped
      ? '<div class="card flip" id="flip">' + cardBody(w) + '<p class="hint turn">눌러서 앞면 보기</p></div>'
      : '<div class="card flip front" id="flip">' + frontBody(w, "눌러서 뒤집기") + '</div>';
    app.innerHTML = '' +
      '<div class="topbar"><button class="link" data-go="#/">‹ 목록</button>' +
        '<span class="side"><span class="muted">암기 · ' + (study.i + 1) + ' / ' + study.ids.length + '</span>' + starBtn(w.id) + '</span></div>' +
      card +
      '<div class="pager">' +
        '<button class="btn" id="prev"' + (study.i > 0 ? "" : " disabled") + '>‹ 이전</button>' +
        '<button class="btn" id="shuffle">섞기</button>' +
        '<button class="btn" id="next"' + (study.i < study.ids.length - 1 ? "" : " disabled") + '>다음 ›</button>' +
      '</div>';
    document.getElementById("flip").addEventListener("click", flipStudy);
    document.getElementById("prev").addEventListener("click", function () { moveStudy(-1); });
    document.getElementById("next").addEventListener("click", function () { moveStudy(1); });
    document.getElementById("shuffle").addEventListener("click", shuffleStudy);
  }

  function flipStudy(e) {
    if (!study) return;
    if (e && e.target && e.target.closest && e.target.closest("[data-speak]")) return; // 발음 버튼은 뒤집지 않음
    study.flipped = !study.flipped;
    turn(renderStudy);
  }

  function moveStudy(step) {
    if (!study) return;
    var i = study.i + step;
    if (i < 0 || i >= study.ids.length) return;
    study.i = i;
    study.flipped = false; // 새 카드는 항상 앞면(영어)부터
    if (step > 0) markSeen(study.ids[i]);
    renderStudy();
  }

  function shuffleStudy() {
    shuffle(study.ids);
    study.i = 0;
    study.flipped = false;
    renderStudy();
  }

  // ───── 확인: 한 번 뒤집고 복습 주기 고르기 ─────

  function startReview() {
    var c = SRS.counts(IDS, Date.now());
    session = { total: c.due + c.fresh, current: null, flipped: false };
    nextReview(null);
  }

  function nextReview(justSeen) {
    session.current = SRS.next(IDS, Date.now(), justSeen);
    session.flipped = false;
    renderReview();
  }

  function renderReview() {
    var now = Date.now();
    var c = SRS.counts(IDS, now);
    var left = c.due + c.fresh;
    var w = session.current && find(session.current);

    if (!w) {
      var due = SRS.nextDue(IDS);
      var when = due ? "다음 확인은 " + SRS.label(Math.max(60000, due - now)) + " 뒤예요." : "";
      app.innerHTML = '' +
        '<div class="topbar"><button class="link" data-go="#/">‹ 목록</button></div>' +
        '<div class="card done"><h2>오늘 확인할 카드를 다 봤어요</h2><p>' + when + '</p>' +
        '<button class="btn primary" data-go="#/">목록으로</button></div>';
      return;
    }

    var total = Math.max(session.total, left);
    var pct = total ? Math.round(((total - left) / total) * 100) : 0;
    var head = '' +
      '<div class="topbar"><button class="link" data-go="#/">‹ 그만하기</button>' +
        '<span class="side"><span class="muted">확인 · 남은 카드 ' + left + '장</span>' + starBtn(w.id) + '</span></div>' +
      '<div class="progress"><div style="width:' + pct + '%"></div></div>';

    if (!session.flipped) {
      // 앞면: 단어만 보이고, 한 번 뒤집으면 끝
      app.innerHTML = head +
        '<div class="card flip front" id="flip">' + frontBody(w, "눌러서 뜻 보기") + '</div>' +
        '<button class="btn show" id="show">뜻 보기</button>';
      document.getElementById("flip").addEventListener("click", flipReview);
      document.getElementById("show").addEventListener("click", flipReview);
      return;
    }

    // 뒷면: 뜻과 함께 아래에 선택 버튼
    var state = SRS.state(w.id);
    var buttons = RATES.map(function (r) {
      var wait = SRS.schedule(state, r[0], now).wait;
      return '<button class="rate ' + r[0] + '" data-rate="' + r[0] + '">' + r[1] + '<small>' + SRS.label(wait) + '</small></button>';
    }).join("");
    app.innerHTML = head +
      '<div class="card flip answer" id="flip">' + cardBody(w) + '</div>' +
      '<div class="rates">' + buttons + '</div>';
  }

  function flipReview(e) {
    if (!session || session.flipped || !session.current) return;
    if (e && e.target && e.target.closest && e.target.closest("[data-speak]")) return; // 발음 버튼은 뒤집지 않음
    session.flipped = true;
    turn(renderReview);
  }

  function rate(rating) {
    if (!session || !session.flipped || !session.current) return;
    var id = session.current;
    SRS.rate(id, rating, Date.now());
    nextReview(id);
  }

  // ───── 이동 ─────

  function route() {
    var hash = location.hash || "#/";
    window.scrollTo(0, 0);
    study = null; session = null;
    if (hash.indexOf("#/card/") === 0) renderCard(decodeURIComponent(hash.slice(7)));
    else if (hash === "#/study") startStudy();
    else if (hash === "#/review") startReview();
    else renderHome();
  }

  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-speak],[data-star],[data-pick],[data-all],#pick,#cancel,#go,[data-go],[data-id],[data-filter],[data-rate]");
    if (!el || el.disabled) return;
    if (el.dataset.speak) speak(el.dataset.speak);
    else if (el.dataset.star) {
      toggleStar(el.dataset.star);
      if (document.getElementById("list")) refreshList();   // 홈: 목록만 다시
      else {                                                 // 카드 화면: 버튼만 바꿈 (카드가 뒤집힌 상태 유지)
        var on = isStar(el.dataset.star);
        el.classList.toggle("on", on);
        el.textContent = on ? "★" : "☆";
        el.setAttribute("aria-pressed", on);
      }
    }
    else if (el.dataset.pick || el.dataset.all || el.id === "pick" || el.id === "cancel" || el.id === "go") homeClick(el);
    else if (el.dataset.go) location.hash = el.dataset.go;
    else if (el.dataset.id) location.hash = "#/card/" + encodeURIComponent(el.dataset.id);
    else if (el.dataset.filter) { home.filter = el.dataset.filter; renderHome(); }
    else if (el.dataset.rate) rate(el.dataset.rate);
  });

  // 단축키
  //   암기: 스페이스/엔터로 앞뒤 뒤집기, ←/→ 로 이전/다음
  //   확인: 스페이스/엔터로 뒤집기, 1~4로 선택
  document.addEventListener("keydown", function (e) {
    var space = e.key === " " || e.key === "Enter";
    if (space && e.target && e.target.tagName === "BUTTON") return;
    if (study) {
      if (space) { e.preventDefault(); flipStudy(); }
      else if (e.key === "ArrowLeft") moveStudy(-1);
      else if (e.key === "ArrowRight") moveStudy(1);
    } else if (session && session.current) {
      if (!session.flipped && space) { e.preventDefault(); flipReview(); }
      else if (session.flipped && e.key >= "1" && e.key <= "4") rate(RATES[Number(e.key) - 1][0]);
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
