// 단어장 데이터
// - type "word"  : A 비교형 카드 (일상 뜻 vs IT 뜻)
// - type "error" : B 에러 메시지 분해형 카드
// 단어를 추가하려면 아래 배열에 같은 모양으로 한 덩어리를 더 넣으면 돼요. id는 겹치지 않게만 지어 주세요.

window.WORDS = [
  // ───────── 뜻이 다른 단어 ─────────
  {
    id: "commit", type: "word", tag: "뜻이 다른 단어",
    term: "commit",
    everyday: "약속하다, 전념하다",
    it: "변경 사항을 기록하다",
    example: 'git commit -m "fix login bug"',
    note: "변경한 내용을 저장소에 확정해서 남긴다는 뜻이에요."
  },
  {
    id: "branch", type: "word", tag: "뜻이 다른 단어",
    term: "branch",
    everyday: "나뭇가지, 지점",
    it: "작업을 나눠 가는 갈래",
    example: "git checkout -b feature/login",
    note: "원본은 그대로 두고 따로 갈라져 나와서 작업하는 줄기예요."
  },
  {
    id: "instance", type: "word", tag: "뜻이 다른 단어",
    term: "instance",
    everyday: "사례, 경우",
    it: "실행 중인 가상 서버 한 대",
    example: "Launch an EC2 instance",
    note: "AWS에서는 빌려 쓰는 서버 한 대를 인스턴스라고 불러요."
  },
  {
    id: "bucket", type: "word", tag: "뜻이 다른 단어",
    term: "bucket",
    everyday: "양동이",
    it: "파일을 담는 S3 저장 공간",
    example: "aws s3 ls s3://my-bucket",
    note: "S3에서 파일(객체)을 담아 두는 가장 큰 단위의 통이에요."
  },
  {
    id: "role", type: "word", tag: "뜻이 다른 단어",
    term: "role",
    everyday: "역할",
    it: "잠깐 빌려 쓰는 권한 묶음",
    example: "Attach an IAM role to the instance",
    note: "사람이 아니라 서버나 서비스에게 권한을 줄 때 주로 써요."
  },
  {
    id: "policy", type: "word", tag: "뜻이 다른 단어",
    term: "policy",
    everyday: "정책, 방침",
    it: "허용·거부 규칙을 적은 권한 문서",
    example: '"Effect": "Allow", "Action": "s3:GetObject"',
    note: "무엇을 해도 되고 안 되는지를 JSON으로 적어 둔 문서예요."
  },
  {
    id: "region", type: "word", tag: "뜻이 다른 단어",
    term: "region",
    everyday: "지역",
    it: "데이터센터가 모여 있는 지리적 구역",
    example: "aws configure set region ap-northeast-2",
    note: "ap-northeast-2가 서울 리전이에요."
  },
  {
    id: "cluster", type: "word", tag: "뜻이 다른 단어",
    term: "cluster",
    everyday: "무리, 송이",
    it: "하나처럼 묶여 동작하는 서버 그룹",
    example: "Create an EKS cluster",
    note: "여러 대의 서버를 한 덩어리처럼 관리할 때 쓰는 말이에요."
  },
  {
    id: "container", type: "word", tag: "뜻이 다른 단어",
    term: "container",
    everyday: "용기, 화물 컨테이너",
    it: "앱과 실행 환경을 함께 묶은 격리된 실행 단위",
    example: "docker run -d nginx",
    note: "어디서 실행해도 똑같이 돌아가도록 포장해 둔 상자예요."
  },
  {
    id: "image", type: "word", tag: "뜻이 다른 단어",
    term: "image",
    everyday: "그림, 인상",
    it: "서버나 컨테이너를 찍어내는 틀",
    example: "docker pull nginx:latest",
    note: "이미지는 틀, 컨테이너는 그 틀로 찍어낸 실물이에요."
  },
  {
    id: "volume", type: "word", tag: "뜻이 다른 단어",
    term: "volume",
    everyday: "음량, 부피",
    it: "서버에 붙여 쓰는 저장 장치",
    example: "Attach an EBS volume",
    note: "서버에 꽂는 외장 하드 같은 거예요."
  },
  {
    id: "snapshot", type: "word", tag: "뜻이 다른 단어",
    term: "snapshot",
    everyday: "스냅 사진",
    it: "특정 시점의 백업 복사본",
    example: "Create a snapshot of the volume",
    note: "그 순간의 상태를 사진 찍듯 통째로 저장해 두는 거예요."
  },
  {
    id: "key", type: "word", tag: "뜻이 다른 단어",
    term: "key",
    everyday: "열쇠",
    it: "접근할 때 쓰는 인증 값",
    example: "AWS Access Key ID [None]: AKIA...",
    note: "S3에서는 파일의 이름(경로)을 key라고 부르기도 해요."
  },
  {
    id: "port", type: "word", tag: "뜻이 다른 단어",
    term: "port",
    everyday: "항구",
    it: "서비스가 드나드는 번호 붙은 문",
    example: "Allow inbound traffic on port 443",
    note: "22는 SSH, 80은 HTTP, 443은 HTTPS가 쓰는 문이에요."
  },
  {
    id: "host", type: "word", tag: "뜻이 다른 단어",
    term: "host",
    everyday: "주인, 진행자",
    it: "네트워크에 연결된 컴퓨터",
    example: "ssh ec2-user@host",
    note: "접속하려는 상대 컴퓨터를 가리킬 때 가장 많이 봐요."
  },
  {
    id: "thread", type: "word", tag: "뜻이 다른 단어",
    term: "thread",
    everyday: "실",
    it: "프로그램 안에서 동시에 실행되는 작업 흐름",
    example: 'Exception in thread "main"',
    note: "한 프로그램 안에서 여러 가닥의 일이 같이 돌아가는 거예요."
  },
  {
    id: "daemon", type: "word", tag: "뜻이 다른 단어",
    term: "daemon",
    everyday: "(신화 속) 정령",
    it: "뒤에서 계속 실행되는 프로그램",
    example: "Cannot connect to the Docker daemon",
    note: "화면에 안 보이지만 계속 켜져서 일하는 프로그램이에요."
  },
  {
    id: "shell", type: "word", tag: "뜻이 다른 단어",
    term: "shell",
    everyday: "껍데기, 조개껍질",
    it: "명령어를 받아 실행해 주는 프로그램",
    example: "#!/bin/bash",
    note: "bash, zsh처럼 터미널에서 명령어를 받아 주는 창구예요."
  },
  {
    id: "kill", type: "word", tag: "뜻이 다른 단어",
    term: "kill",
    everyday: "죽이다",
    it: "실행 중인 프로세스를 강제로 끝내다",
    example: "kill -9 1234",
    note: "무서운 말 같지만 그냥 프로그램을 꺼 버린다는 뜻이에요."
  },
  {
    id: "pipeline", type: "word", tag: "뜻이 다른 단어",
    term: "pipeline",
    everyday: "송유관",
    it: "빌드·테스트·배포를 자동으로 잇는 흐름",
    example: "Pipeline execution failed at stage: Build",
    note: "코드를 올리면 배포까지 관을 타고 흘러가듯 이어진다는 뜻이에요."
  },

  // ───────── 자주 쓰는 표현 ─────────
  {
    id: "deploy", type: "word", tag: "자주 쓰는 표현",
    term: "deploy",
    everyday: "(군대를) 배치하다",
    it: "만든 것을 서버에 올려 서비스하다",
    example: "Deploying to production...",
    note: "내 컴퓨터에만 있던 걸 실제로 쓸 수 있게 내보내는 일이에요."
  },
  {
    id: "provision", type: "word", tag: "자주 쓰는 표현",
    term: "provision",
    everyday: "식량, 대비",
    it: "서버나 자원을 미리 준비해 할당하다",
    example: "Provisioned capacity: 5 RCU",
    note: "쓸 자원을 미리 마련해 둔다는 뜻이에요."
  },
  {
    id: "throttle", type: "word", tag: "자주 쓰는 표현",
    term: "throttle",
    everyday: "목을 조르다, 조절판",
    it: "요청이 너무 많아서 속도를 제한하다",
    example: "ThrottlingException: Rate exceeded",
    note: "너무 빨리 많이 요청해서 잠깐 막혔다는 뜻이에요."
  },
  {
    id: "terminate", type: "word", tag: "자주 쓰는 표현",
    term: "terminate",
    everyday: "끝내다",
    it: "인스턴스를 완전히 삭제하다",
    example: "aws ec2 terminate-instances --instance-ids i-0abc",
    note: "stop은 잠깐 끄는 것, terminate는 아예 없애는 거예요."
  },
  {
    id: "throw", type: "word", tag: "자주 쓰는 표현",
    term: "throw",
    everyday: "던지다",
    it: "에러를 발생시키다",
    example: 'throw new Error("invalid input")',
    note: "에러를 던지면 누군가 받아야(catch) 프로그램이 안 멈춰요."
  },
  {
    id: "fall-back-to", type: "word", tag: "자주 쓰는 표현",
    term: "fall back to",
    everyday: "뒤로 물러서다",
    it: "안 될 때 대신 ~로 대체하다",
    example: "Falling back to default region",
    note: "원래 하려던 게 안 돼서 차선책을 쓴다는 뜻이에요."
  },
  {
    id: "deprecated", type: "word", tag: "자주 쓰는 표현",
    term: "deprecated",
    everyday: "못마땅하게 여겨지는",
    it: "곧 없어질 예정이라 쓰지 말라는",
    example: "Warning: this option is deprecated",
    note: "지금은 되지만 나중에 사라지니 새 방식을 쓰라는 경고예요."
  },
  {
    id: "resolve", type: "word", tag: "자주 쓰는 표현",
    term: "resolve",
    everyday: "해결하다, 결심하다",
    it: "이름을 실제 주소로 찾아내다",
    example: "Could not resolve host: example.com",
    note: "도메인 이름을 IP 주소로 바꿔 찾는 과정을 말해요."
  },

  // ───────── 에러 메시지 ─────────
  {
    id: "failed-to", type: "error", tag: "에러 메시지",
    title: "Failed to ___",
    short: "~하는 데 실패했다",
    pattern: "Failed to + 동사",
    sentence: "Failed to connect to server",
    hl: "Failed to",
    meaning: "서버에 연결하는 데 실패했다",
    parts: [
      ["Failed to", "~하는 데 실패했다"],
      ["connect", "연결하다"],
      ["server", "서버"]
    ],
    note: "뒤의 동사만 바꾸면 다른 실패 메시지도 읽혀요."
  },
  {
    id: "permission-denied", type: "error", tag: "에러 메시지",
    title: "___ denied",
    short: "~이 거부됐다",
    pattern: "명사 + denied",
    sentence: "Permission denied",
    hl: "denied",
    meaning: "권한이 거부됐다",
    parts: [
      ["Permission", "권한"],
      ["denied", "거부됐다"]
    ],
    note: "Access Denied도 같은 뜻이에요. 대부분 권한 설정 문제예요."
  },
  {
    id: "not-authorized", type: "error", tag: "에러 메시지",
    title: "is not authorized to ___",
    short: "~할 권한이 없다",
    pattern: "is not authorized to + 동사",
    sentence: "User is not authorized to perform: s3:GetObject",
    hl: "is not authorized to",
    meaning: "사용자에게 s3:GetObject를 수행할 권한이 없다",
    parts: [
      ["User", "사용자"],
      ["is not authorized to", "~할 권한이 없다"],
      ["perform", "수행하다"],
      ["s3:GetObject", "S3에서 파일을 가져오는 동작"]
    ],
    note: "콜론 뒤에 적힌 동작을 IAM 정책에 허용해 주면 풀려요."
  },
  {
    id: "timed-out", type: "error", tag: "에러 메시지",
    title: "___ timed out",
    short: "~의 시간이 초과됐다",
    pattern: "명사 + timed out",
    sentence: "Connection timed out",
    hl: "timed out",
    meaning: "연결 시간이 초과됐다",
    parts: [
      ["Connection", "연결"],
      ["timed out", "시간이 초과됐다"]
    ],
    note: "기다렸는데 응답이 없었다는 뜻이에요. 보안 그룹이 막고 있을 때 자주 나와요."
  },
  {
    id: "refused", type: "error", tag: "에러 메시지",
    title: "___ refused",
    short: "~이 거절당했다",
    pattern: "명사 + refused",
    sentence: "Connection refused",
    hl: "refused",
    meaning: "연결이 거절당했다",
    parts: [
      ["Connection", "연결"],
      ["refused", "거절당했다"]
    ],
    note: "timed out은 무응답, refused는 바로 거절이에요. 그 포트에서 받는 프로그램이 없을 때 나와요."
  },
  {
    id: "no-such", type: "error", tag: "에러 메시지",
    title: "No such ___",
    short: "그런 ~는 없다",
    pattern: "No such + 명사",
    sentence: "No such file or directory",
    hl: "No such",
    meaning: "그런 파일이나 폴더는 없다",
    parts: [
      ["No such", "그런 ~는 없다"],
      ["file", "파일"],
      ["or", "또는"],
      ["directory", "폴더"]
    ],
    note: "경로나 이름에 오타가 있는지부터 보면 돼요."
  },
  {
    id: "not-found", type: "error", tag: "에러 메시지",
    title: "___ not found",
    short: "~을 찾을 수 없다",
    pattern: "명사 + not found",
    sentence: "aws: command not found",
    hl: "not found",
    meaning: "aws라는 명령어를 찾을 수 없다",
    parts: [
      ["aws", "입력한 명령어 이름"],
      ["command", "명령어"],
      ["not found", "찾을 수 없다"]
    ],
    note: "그 프로그램이 설치가 안 됐거나 경로(PATH)에 없다는 뜻이에요."
  },
  {
    id: "could-not", type: "error", tag: "에러 메시지",
    title: "Could not ___",
    short: "~할 수 없었다",
    pattern: "Could not + 동사",
    sentence: "Could not resolve host: example.com",
    hl: "Could not",
    meaning: "example.com이라는 주소를 찾아내지 못했다",
    parts: [
      ["Could not", "~할 수 없었다"],
      ["resolve", "(이름을 주소로) 찾아내다"],
      ["host", "접속하려는 컴퓨터"]
    ],
    note: "주소 오타이거나 인터넷·DNS 문제일 때 나와요."
  },
  {
    id: "unable-to", type: "error", tag: "에러 메시지",
    title: "Unable to ___",
    short: "~할 수 없다",
    pattern: "Unable to + 동사",
    sentence: "Unable to locate credentials",
    hl: "Unable to",
    meaning: "인증 정보를 찾을 수 없다",
    parts: [
      ["Unable to", "~할 수 없다"],
      ["locate", "찾아내다"],
      ["credentials", "인증 정보"]
    ],
    note: "AWS CLI에서 자주 봐요. aws configure로 키를 등록하면 풀려요."
  },
  {
    id: "does-not-exist", type: "error", tag: "에러 메시지",
    title: "The specified ___ does not exist",
    short: "지정한 ~가 존재하지 않는다",
    pattern: "The specified + 명사 + does not exist",
    sentence: "The specified bucket does not exist",
    hl: "does not exist",
    meaning: "지정한 버킷이 존재하지 않는다",
    parts: [
      ["The specified", "지정한"],
      ["bucket", "버킷 (S3 저장 공간)"],
      ["does not exist", "존재하지 않는다"]
    ],
    note: "이름 오타이거나 다른 리전·계정을 보고 있을 때 나와요."
  },
  {
    id: "exceeded", type: "error", tag: "에러 메시지",
    title: "___ exceeded",
    short: "~을 초과했다",
    pattern: "명사 + exceeded",
    sentence: "Rate exceeded",
    hl: "exceeded",
    meaning: "요청 속도 한도를 초과했다",
    parts: [
      ["Rate", "(요청) 속도"],
      ["exceeded", "초과했다"]
    ],
    note: "Limit exceeded, Quota exceeded도 같은 식으로 읽으면 돼요."
  },
  {
    id: "already-in-use", type: "error", tag: "에러 메시지",
    title: "___ already in use",
    short: "~은 이미 사용 중이다",
    pattern: "명사 + already in use",
    sentence: "Address already in use",
    hl: "already in use",
    meaning: "그 주소(포트)는 이미 사용 중이다",
    parts: [
      ["Address", "주소 (여기서는 포트)"],
      ["already", "이미"],
      ["in use", "사용 중인"]
    ],
    note: "다른 프로그램이 같은 포트를 쓰고 있다는 뜻이에요."
  },
  {
    id: "cannot", type: "error", tag: "에러 메시지",
    title: "Cannot ___",
    short: "~할 수 없다",
    pattern: "Cannot + 동사",
    sentence: "Cannot read properties of undefined",
    hl: "Cannot",
    meaning: "정의되지 않은 값의 속성은 읽을 수 없다",
    parts: [
      ["Cannot", "~할 수 없다"],
      ["read", "읽다"],
      ["properties", "속성"],
      ["of undefined", "정의되지 않은 값의"]
    ],
    note: "값이 비어 있는데 그 안의 무언가를 꺼내려 했다는 뜻이에요."
  },
  {
    id: "has-expired", type: "error", tag: "에러 메시지",
    title: "___ has expired",
    short: "~이 만료됐다",
    pattern: "명사 + has expired",
    sentence: "Token has expired",
    hl: "has expired",
    meaning: "토큰이 만료됐다",
    parts: [
      ["Token", "토큰 (임시 인증 값)"],
      ["has expired", "만료됐다"]
    ],
    note: "유효 시간이 지났다는 뜻이라, 다시 로그인하거나 새로 발급받으면 돼요."
  }
];
