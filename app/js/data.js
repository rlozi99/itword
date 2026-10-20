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
  },
  // ════════════════════════════════════════════════════════════
  // 살핌(EKS) 프로젝트 코드에서 뽑은 단어 (2026-10-20 추가)
  // ════════════════════════════════════════════════════════════

  // ───────── 뜻이 다른 단어 ─────────
  {
    id: "node", type: "word", tag: "뜻이 다른 단어",
    term: "node",
    everyday: "마디, 매듭",
    it: "클러스터를 이루는 서버 한 대",
    example: "kubectl get nodes",
    note: "살핌 프로젝트에서는 t3.small 노드 3대로 EKS 클러스터를 구성했어요."
  },
  {
    id: "pod", type: "word", tag: "뜻이 다른 단어",
    term: "pod",
    everyday: "(콩) 꼬투리",
    it: "쿠버네티스가 컨테이너를 담아 띄우는 가장 작은 단위",
    example: "kubectl get pods -n argocd",
    note: "꼬투리 안에 콩이 들어 있듯 Pod 안에 컨테이너가 들어 있어요."
  },
  {
    id: "replica", type: "word", tag: "뜻이 다른 단어",
    term: "replica",
    everyday: "복제품",
    it: "똑같이 여러 개 띄운 Pod 사본",
    example: "replicas: 2",
    note: "하나가 죽어도 나머지가 요청을 받도록 여러 개 띄워요."
  },
  {
    id: "probe", type: "word", tag: "뜻이 다른 단어",
    term: "probe",
    everyday: "탐사선, 캐묻다",
    it: "컨테이너가 정상인지 주기적으로 찔러보는 검사",
    example: "readinessProbe: { httpGet: { path: /health } }",
    note: "readiness는 요청을 받을 준비가 됐는지, liveness는 살아 있는지(아니면 재시작) 확인해요."
  },
  {
    id: "ingress", type: "word", tag: "뜻이 다른 단어",
    term: "ingress",
    everyday: "들어감, 입장",
    it: "외부 요청을 클러스터 안 서비스로 들여보내는 규칙",
    example: "ingressClassName: alb",
    note: "반대말 egress는 밖으로 나가는 트래픽이에요."
  },
  {
    id: "drift", type: "word", tag: "뜻이 다른 단어",
    term: "drift",
    everyday: "표류하다, 떠내려가다",
    it: "실제 인프라 상태가 코드와 어긋나는 것",
    example: "selfHeal: true   # 드리프트 방지",
    note: "콘솔이나 kubectl로 손으로 고치면 생겨요. terraform plan에 예상 못 한 변경이 보이면 드리프트를 의심해요."
  },
  {
    id: "lock", type: "word", tag: "뜻이 다른 단어",
    term: "lock",
    everyday: "자물쇠",
    it: "동시에 고치지 못하게 거는 잠금",
    example: 'dynamodb_table = "salpim-terraform-lock"',
    note: "apply가 도는 동안 다른 apply가 state를 건드리지 못하게 막아요."
  },
  {
    id: "backend", type: "word", tag: "뜻이 다른 단어",
    term: "backend",
    everyday: "뒤쪽",
    it: "Terraform state를 저장하는 곳 (웹에서는 서버 쪽 프로그램)",
    example: 'backend "s3" { ... }',
    note: "같은 단어지만 Terraform에서는 state 저장 위치, 웹 개발에서는 화면 뒤에서 도는 서버를 뜻해요."
  },
  {
    id: "module", type: "word", tag: "뜻이 다른 단어",
    term: "module",
    everyday: "부품, (교재의) 단원",
    it: "재사용하려고 묶어 둔 코드 묶음",
    example: 'module "vpc" { source = "../../modules/vpc" }',
    note: "dev, stage, prod가 같은 vpc 모듈을 값만 바꿔 불러 써요."
  },
  {
    id: "gateway", type: "word", tag: "뜻이 다른 단어",
    term: "gateway",
    everyday: "관문, 출입구",
    it: "네트워크 사이를 오가는 출입구",
    example: "aws_nat_gateway",
    note: "인터넷 게이트웨이는 밖과 직접 연결, NAT 게이트웨이는 private 서브넷이 밖으로 나갈 때만 쓰는 출구예요. NAT는 켜 둔 시간만큼 요금이 나가요."
  },
  {
    id: "route", type: "word", tag: "뜻이 다른 단어",
    term: "route",
    everyday: "길, 노선",
    it: "트래픽을 어디로 보낼지 정한 규칙",
    example: 'route { cidr_block = "0.0.0.0/0" }',
    note: "0.0.0.0/0은 '그 밖의 모든 주소'라는 뜻이에요."
  },
  {
    id: "tag", type: "word", tag: "뜻이 다른 단어",
    term: "tag",
    everyday: "꼬리표",
    it: "이미지 버전을 구분하는 이름",
    example: "salpim:${{ github.sha }}",
    note: "이미지 이름 뒤 콜론(:) 다음이 태그예요. 살핌은 커밋 해시를 태그로 써서 어느 커밋으로 만든 이미지인지 추적해요."
  },
  {
    id: "latest", type: "word", tag: "뜻이 다른 단어",
    term: "latest",
    everyday: "최신의",
    it: "태그 이름일 뿐, 최신이라는 보장은 없음",
    example: "docker push $ECR_REPOSITORY_URI:latest",
    note: "누가 언제 덮어썼는지 알 수 없어서, 배포에는 커밋 해시 같은 고유한 태그를 써요."
  },
  {
    id: "mutable", type: "word", tag: "뜻이 다른 단어",
    term: "mutable",
    everyday: "변할 수 있는",
    it: "같은 이름으로 덮어쓸 수 있는",
    example: 'image_tag_mutability = "MUTABLE"',
    note: "반대는 immutable(덮어쓸 수 없는). GitHub OIDC의 'immutable subject claims'도 같은 단어예요."
  },
  {
    id: "layer", type: "word", tag: "뜻이 다른 단어",
    term: "layer",
    everyday: "층, 겹",
    it: "도커 이미지를 이루는 변경 단위",
    example: "COPY package*.json ./",
    note: "바뀌지 않은 레이어는 캐시를 다시 써요. 패키지 파일을 먼저 복사하면 코드만 바꿨을 때 설치 단계를 건너뛰어 빌드가 빨라져요."
  },
  {
    id: "stage", type: "word", tag: "뜻이 다른 단어",
    term: "stage",
    everyday: "무대, 단계",
    it: "운영 전에 미리 확인하는 환경 (또는 빌드 단계)",
    example: "overlays/stage",
    note: "보통 dev → stage → prod 순서로 올려요. Dockerfile의 multi-stage build에서는 '단계'라는 뜻이에요."
  },
  {
    id: "overlay", type: "word", tag: "뜻이 다른 단어",
    term: "overlay",
    everyday: "덧씌우기",
    it: "공통 설정 위에 환경별 차이만 덮어쓰는 것",
    example: "resources: [ ../../base ]",
    note: "Kustomize에서 base는 공통, overlays는 환경마다 다른 부분만 적어요."
  },
  {
    id: "secret", type: "word", tag: "뜻이 다른 단어",
    term: "secret",
    everyday: "비밀",
    it: "비밀번호나 키를 담아두는 리소스",
    example: "kubectl create secret generic salpim-secrets",
    note: "로컬 .env는 클러스터가 못 읽어서 Secret으로 따로 넣어야 해요."
  },
  {
    id: "label", type: "word", tag: "뜻이 다른 단어",
    term: "label",
    everyday: "상표, 딱지",
    it: "리소스끼리 서로 찾게 붙이는 이름표",
    example: "selector: { app: salpim-backend }",
    note: "Service는 이 라벨이 붙은 Pod를 찾아 요청을 보내요. 라벨이 다르면 연결이 안 돼요."
  },
  {
    id: "limit", type: "word", tag: "뜻이 다른 단어",
    term: "limit",
    everyday: "한계",
    it: "컨테이너가 쓸 수 있는 최대 CPU·메모리",
    example: 'limits: { memory: "256Mi" }',
    note: "requests는 최소로 보장받는 양, limits는 넘을 수 없는 상한이에요. 메모리 상한을 넘으면 OOMKilled가 돼요."
  },
  {
    id: "payload", type: "word", tag: "뜻이 다른 단어",
    term: "payload",
    everyday: "화물, 탑재물",
    it: "요청에 실어 보내는 실제 데이터",
    example: "curl -X POST --data '{\"text\": \"배포 성공\"}'",
    note: "주소나 헤더가 아니라 본문에 담긴 내용을 말해요."
  },

  // ───────── 자주 쓰는 표현 ─────────
  {
    id: "scale", type: "word", tag: "자주 쓰는 표현",
    term: "scale",
    everyday: "저울, 규모",
    it: "서버나 Pod 수를 늘리거나 줄이다",
    example: "kubectl scale deployment salpim-backend --replicas=3",
    note: "scale up/out은 늘리기, scale down/in은 줄이기. 살핌은 HPA가 CPU 70%를 기준으로 자동으로 해줘요."
  },
  {
    id: "prune", type: "word", tag: "자주 쓰는 표현",
    term: "prune",
    everyday: "(가지를) 치다",
    it: "코드에서 지운 리소스를 실제에서도 지우다",
    example: "prune: true",
    note: "Git에서 yaml을 지우면 Argo CD가 클러스터에서도 그 리소스를 지워줘요."
  },
  {
    id: "force", type: "word", tag: "자주 쓰는 표현",
    term: "force",
    everyday: "힘, 억지로 시키다",
    it: "경고나 확인을 건너뛰고 강제로 하다",
    example: "force_delete = true",
    note: "편하지만 되돌릴 수 없는 경우가 많아요. 쓸 때마다 무엇이 지워지는지 확인해요."
  },
  {
    id: "teardown", type: "word", tag: "자주 쓰는 표현",
    term: "teardown",
    everyday: "해체, 분해",
    it: "만든 인프라를 전부 걷어내기",
    example: "./teardown.ps1",
    note: "반대말은 setup. 비용을 아끼려고 작업이 끝나면 teardown해요."
  },
  {
    id: "internet-facing", type: "word", tag: "자주 쓰는 표현",
    term: "internet-facing",
    everyday: "인터넷을 마주 보는",
    it: "외부 인터넷에서 접근할 수 있는",
    example: "alb.ingress.kubernetes.io/scheme: internet-facing",
    note: "반대는 internal(내부 전용)이에요."
  },
  {
    id: "prefix", type: "word", tag: "자주 쓰는 표현",
    term: "prefix",
    everyday: "접두사",
    it: "앞부분이 ~로 시작하면 모두 해당",
    example: "pathType: Prefix",
    note: "path가 / 이고 Prefix면 모든 경로가 이 서비스로 가요."
  },
  {
    id: "ramp-up", type: "word", tag: "자주 쓰는 표현",
    term: "ramp up",
    everyday: "경사로를 오르다",
    it: "부하나 규모를 서서히 늘리다",
    example: "{ duration: '1m', target: 100 }",
    note: "k6 부하테스트에서 사용자 수를 단계적으로 올리는 것을 ramping이라고 해요."
  },

  // ───────── 에러 메시지 ─────────
  {
    id: "imagepullbackoff", type: "error", tag: "에러 메시지",
    title: "ImagePullBackOff",
    short: "이미지를 못 가져와서 재시도 대기 중",
    pattern: "Image + Pull + BackOff",
    sentence: "ImagePullBackOff",
    hl: "BackOff",
    meaning: "이미지를 가져오는 데 계속 실패해서, 잠시 기다렸다 다시 시도하는 중",
    parts: [
      ["Image", "컨테이너 이미지"],
      ["Pull", "가져오기"],
      ["BackOff", "물러나서 기다렸다 재시도"]
    ],
    note: "살핌에서 Docker Hub 비공개 저장소 인증 문제로 실제로 겪었어요. kubectl describe pod로 원인을 봐요."
  },
  {
    id: "crashloopbackoff", type: "error", tag: "에러 메시지",
    title: "CrashLoopBackOff",
    short: "켜지자마자 죽는 걸 반복하는 중",
    pattern: "Crash + Loop + BackOff",
    sentence: "CrashLoopBackOff",
    hl: "BackOff",
    meaning: "컨테이너가 켜지자마자 죽는 걸 반복해서, 재시작을 점점 늦추는 중",
    parts: [
      ["Crash", "비정상 종료"],
      ["Loop", "반복"],
      ["BackOff", "물러나서 기다렸다 재시도"]
    ],
    note: "kubectl logs <pod> --previous로 죽기 직전 로그를 봐요. 살핌 서버는 JWT_SECRET이 없으면 바로 종료돼서 이게 나요."
  },
  {
    id: "createcontainerconfigerror", type: "error", tag: "에러 메시지",
    title: "CreateContainerConfigError",
    short: "컨테이너 설정을 준비하지 못함",
    pattern: "Create + Container + Config + Error",
    sentence: "CreateContainerConfigError",
    hl: "Config",
    meaning: "컨테이너를 만들 설정을 준비하지 못했다",
    parts: [
      ["Create", "만들다"],
      ["Container", "컨테이너"],
      ["Config", "설정"],
      ["Error", "에러"]
    ],
    note: "참조한 Secret이나 ConfigMap이 없을 때 나와요. 살핌에서 salpim-secrets를 안 만들었을 때 겪었어요."
  },
  {
    id: "may-require", type: "error", tag: "에러 메시지",
    title: "may require ___",
    short: "~이 필요할 수도 있다",
    pattern: "may require + 명사",
    sentence: "pull access denied for salpim, repository does not exist or may require 'docker login'",
    hl: "may require",
    meaning: "이미지를 가져올 권한이 없다. 저장소가 없거나 로그인이 필요할 수 있다",
    parts: [
      ["pull access denied", "가져오기 권한이 거부됨"],
      ["repository does not exist", "저장소가 없다"],
      ["or may require", "또는 ~이 필요할 수도 있다"],
      ["'docker login'", "도커 로그인"]
    ],
    note: "에러가 원인 후보를 여러 개 알려줄 때 or, may를 자주 써요. 하나씩 확인하면 돼요."
  },
  {
    id: "authentication-required", type: "error", tag: "에러 메시지",
    title: "___ required",
    short: "~이 필요하다",
    pattern: "명사 + required",
    sentence: "authentication required",
    hl: "required",
    meaning: "인증이 필요하다",
    parts: [
      ["authentication", "인증 (누구인지 확인)"],
      ["required", "필요하다"]
    ],
    note: "Argo CD가 비공개 GitOps 저장소에 접근할 때 겪었어요. authentication(누구인지)과 authorization(무엇을 해도 되는지)을 구분해요."
  },
  {
    id: "state-lock", type: "error", tag: "에러 메시지",
    title: "Error ___ing",
    short: "~하는 중에 에러",
    pattern: "Error + 동사ing",
    sentence: "Error acquiring the state lock",
    hl: "Error acquiring",
    meaning: "state 잠금을 얻는 중에 에러가 났다",
    parts: [
      ["Error", "에러"],
      ["acquiring", "얻는 중"],
      ["the state lock", "state 잠금"]
    ],
    note: "다른 apply가 돌고 있거나, 이전 실행이 중간에 끊겨 잠금이 남았을 때 나와요. 정말 아무도 안 쓰는지 확인한 뒤에만 terraform force-unlock을 써요."
  },
  {
    id: "too-many", type: "error", tag: "에러 메시지",
    title: "Too many ___",
    short: "~이 너무 많다",
    pattern: "Too many + 명사",
    sentence: "Error: Too many command line arguments",
    hl: "Too many",
    meaning: "명령에 넘긴 인자가 너무 많다",
    parts: [
      ["Too many", "너무 많은"],
      ["command line", "명령줄"],
      ["arguments", "인자"]
    ],
    note: "PowerShell에서 점(.)이 들어간 옵션을 따옴표 없이 쓰면 둘로 쪼개져서 나요. 직접 겪었어요."
  },
  {
    id: "no-configuration", type: "error", tag: "에러 메시지",
    title: "No ___ files",
    short: "~ 파일이 없다",
    pattern: "No + 명사",
    sentence: "Error: No configuration files",
    hl: "No",
    meaning: "설정 파일이 없다",
    parts: [
      ["No", "없는"],
      ["configuration", "설정"],
      ["files", "파일들"]
    ],
    note: "terraform 명령을 .tf 파일이 없는 폴더에서 실행했을 때 나요. 직접 겪었어요."
  },
  {
    id: "probe-failed", type: "error", tag: "에러 메시지",
    title: "___ probe failed",
    short: "~ 검사가 실패했다",
    pattern: "명사 + failed",
    sentence: "Readiness probe failed: HTTP probe failed with statuscode: 503",
    hl: "probe failed",
    meaning: "준비 상태 검사가 실패했다. HTTP 검사가 503을 받았다",
    parts: [
      ["Readiness", "준비 상태"],
      ["probe failed", "검사 실패"],
      ["with statuscode: 503", "상태 코드 503으로"]
    ],
    note: "실패하는 동안 그 Pod로는 트래픽이 가지 않아요. liveness 검사가 실패하면 재시작돼요."
  },
  {
    id: "insufficient", type: "error", tag: "에러 메시지",
    title: "Insufficient ___",
    short: "~이 부족하다",
    pattern: "Insufficient + 명사",
    sentence: "0/3 nodes are available: 3 Insufficient cpu.",
    hl: "Insufficient",
    meaning: "노드 3개 모두 CPU가 부족해서 Pod를 둘 곳이 없다",
    parts: [
      ["0/3 nodes are available", "노드 3개 중 쓸 수 있는 건 0개"],
      ["Insufficient", "부족한"],
      ["cpu", "CPU"]
    ],
    note: "Pod가 Pending에 멈춰 있을 때 kubectl describe pod에서 보여요. requests 합이 노드 용량을 넘으면 나요. t3.small처럼 작은 노드에서 흔해요."
  },
  {
    id: "did-you-specify", type: "error", tag: "에러 메시지",
    title: "did you ___?",
    short: "혹시 ~했나요?",
    pattern: "did you + 동사?",
    sentence: "The connection to the server localhost:8080 was refused - did you specify the right host or port?",
    hl: "did you specify",
    meaning: "서버 연결이 거절됐다. 주소나 포트를 제대로 지정했나요?",
    parts: [
      ["The connection to the server", "서버 연결"],
      ["was refused", "거절됐다"],
      ["did you specify", "지정했나요"],
      ["the right host or port", "올바른 주소나 포트"]
    ],
    note: "kubectl이 접속할 클러스터 정보(kubeconfig)가 없어서 기본값 localhost:8080으로 간 거예요. 클러스터를 새로 만든 뒤 aws eks update-kubeconfig를 다시 실행해요."
  },
  {
    id: "must-be-logged-in", type: "error", tag: "에러 메시지",
    title: "You must be ___",
    short: "~여야 한다",
    pattern: "You must be + 상태",
    sentence: "error: You must be logged in to the server (Unauthorized)",
    hl: "You must be",
    meaning: "서버에 로그인돼 있어야 한다 (인증되지 않음)",
    parts: [
      ["You must be", "~여야 한다"],
      ["logged in", "로그인된"],
      ["to the server", "서버에"],
      ["Unauthorized", "인증 안 됨"]
    ],
    note: "EKS에서는 클러스터에 접근 권한이 없는 IAM 사용자로 접속하면 나요. aws sts get-caller-identity로 지금 누구로 접속했는지 먼저 확인해요."
  },
  {
    id: "io-timeout", type: "error", tag: "에러 메시지",
    title: "i/o timeout",
    short: "입출력 시간 초과",
    pattern: "명사 + timeout",
    sentence: "Unable to connect to the server: dial tcp x.x.x.x:443: i/o timeout",
    hl: "i/o timeout",
    meaning: "서버에 연결할 수 없다. TCP 연결 시도가 시간 초과됐다",
    parts: [
      ["Unable to connect", "연결할 수 없다"],
      ["dial tcp", "TCP로 연결 시도"],
      ["i/o timeout", "입출력 시간 초과"]
    ],
    note: "살핌은 EKS API에 내 IP만 허용해 둬서, 집 IP가 바뀌면 이 에러가 나요. public_access_cidrs를 확인해요."
  },
  {
    id: "dependency-violation", type: "error", tag: "에러 메시지",
    title: "cannot be deleted",
    short: "삭제될 수 없다",
    pattern: "has dependencies and cannot be + 과거분사",
    sentence: "DependencyViolation: The vpc has dependencies and cannot be deleted.",
    hl: "cannot be deleted",
    meaning: "VPC에 아직 딸린 리소스가 있어서 지울 수 없다",
    parts: [
      ["DependencyViolation", "의존 관계 위반"],
      ["has dependencies", "딸린 것이 있다"],
      ["cannot be deleted", "삭제될 수 없다"]
    ],
    note: "Ingress가 만든 ALB처럼 Terraform 밖에서 생긴 리소스가 남아 있으면 destroy가 여기서 막혀요. teardown.ps1에서 ALB 삭제를 기다리는 이유예요."
  },
  {
    id: "not-empty", type: "error", tag: "에러 메시지",
    title: "___NotEmpty",
    short: "비어 있지 않다",
    pattern: "명사 + NotEmpty",
    sentence: "RepositoryNotEmptyException: The repository with name 'salpim' cannot be deleted because it still contains images",
    hl: "NotEmpty",
    meaning: "저장소에 아직 이미지가 있어서 지울 수 없다",
    parts: [
      ["Repository", "저장소"],
      ["NotEmpty", "비어 있지 않음"],
      ["because it still contains images", "아직 이미지가 들어 있어서"]
    ],
    note: "S3의 BucketNotEmpty도 같은 패턴이에요. 살핌 ECR 모듈은 force_delete = true로 이걸 피했어요."
  },
  {
    id: "oomkilled", type: "error", tag: "에러 메시지",
    title: "OOMKilled",
    short: "메모리 부족으로 강제 종료됨",
    pattern: "OOM + Killed",
    sentence: "Last State: Terminated  Reason: OOMKilled",
    hl: "OOMKilled",
    meaning: "메모리 한도를 넘어서 강제로 종료됐다",
    parts: [
      ["OOM", "Out Of Memory, 메모리 부족"],
      ["Killed", "강제로 종료됨"],
      ["Terminated", "종료됨"]
    ],
    note: "limits의 memory(살핌은 256Mi)를 넘으면 쿠버네티스가 컨테이너를 종료해요. kubectl describe pod에서 보여요."
  },
  {
    id: "already-exists", type: "error", tag: "에러 메시지",
    title: "___ already exists",
    short: "~이 이미 존재한다",
    pattern: "명사 + already exists",
    sentence: "ResourceInUseException: Cluster already exists with name: salpim-dev-cluster",
    hl: "already exists",
    meaning: "그 이름의 클러스터가 이미 있다",
    parts: [
      ["ResourceInUse", "리소스가 사용 중"],
      ["already exists", "이미 존재한다"],
      ["with name", "~라는 이름으로"]
    ],
    note: "destroy가 중간에 실패했거나 콘솔로 만든 게 남아 있을 때 apply에서 나요. 이미 있는 걸 관리하려면 import를 써요."
  },
  {
    id: "invalid-signature", type: "error", tag: "에러 메시지",
    title: "invalid ___",
    short: "~이 유효하지 않다",
    pattern: "invalid + 명사",
    sentence: "JsonWebTokenError: invalid signature",
    hl: "invalid",
    meaning: "토큰의 서명이 유효하지 않다",
    parts: [
      ["JsonWebToken", "JWT (로그인 토큰)"],
      ["invalid", "유효하지 않은"],
      ["signature", "서명"]
    ],
    note: "토큰을 만들 때와 검사할 때 JWT_SECRET이 다르면 나요. 환경마다 Secret 값을 다르게 넣었을 때 흔해요."
  },
  {
    id: "violates-unique", type: "error", tag: "에러 메시지",
    title: "violates ___",
    short: "~을 위반한다",
    pattern: "violates + 명사",
    sentence: "duplicate key value violates unique constraint \"users_email_key\"",
    hl: "violates",
    meaning: "중복된 값이 중복 금지 규칙을 어겼다",
    parts: [
      ["duplicate key value", "중복된 키 값"],
      ["violates", "위반한다"],
      ["unique constraint", "중복 금지 제약"]
    ],
    note: "PostgreSQL 에러 코드 23505예요. 살핌 server.js는 이걸 409 '이미 존재하는 데이터입니다'로 바꿔서 응답해요."
  },
  {
    id: "blocked-by-cors", type: "error", tag: "에러 메시지",
    title: "has been blocked by ___",
    short: "~에 의해 막혔다",
    pattern: "has been blocked by + 명사",
    sentence: "Access to fetch at 'https://api.example.com' from origin 'http://localhost:5173' has been blocked by CORS policy",
    hl: "has been blocked by",
    meaning: "다른 출처에서 보낸 요청이 CORS 정책 때문에 막혔다",
    parts: [
      ["Access to fetch at", "~로의 요청"],
      ["from origin", "~에서 온 (출처)"],
      ["has been blocked by", "~에 의해 막혔다"],
      ["CORS policy", "교차 출처 정책"]
    ],
    note: "브라우저가 막는 거라 서버 로그엔 안 보일 수 있어요. 서버의 CORS 허용 목록(origin)에 주소를 추가해요."
  }

];
