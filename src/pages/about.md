---
layout: "../layouts/BlogPost.astro"
title: "About Me"
description: "하고 싶은 게 많은 프론트 개발자"
updatedDate: "2023.07.10"
heroImage: "/placeholder-about.jpeg"
---

## 🎧 About Me

- 웹 프론트엔드 개발자를 지망하는 신입 개발자입니다.
- UI/UX의 가치를 중요하게 생각하며, 모든 기기에서 작동하는 앱을 만들고자 합니다.
- 코드 작성과 문제 해결을 위해 지속적인 공부와 수정에 헌신합니다.
- 끈질기게 문제를 해결하고, 조언을 구하며 최종적으로 해결합니다.
- 문제를 해결한 순간의 성취감이 삶의 원동력이 되고, 글로 소통하여 정확하게 의사를 전달하는 것을 선호합니다.
- React와 Next.js를 활용하여 풀스택으로 개발할 수 있는 능력을 갖추고 있습니다.
- EDM과 힙합 등 베이스 강한 음악을 좋아하며, 정기적으로 페스티벌에 참여하는 것을 즐깁니다.

## 🔥 Projects

### ChatAI-B 프론트 개발

- 개발 기간: `2023.05 ~ 2023.07`
- AWS Lambda를 이용한 의료 챗봇 서비스의 프론트를 개발했습니다.
- 회사의 유일한 프론트 개발자로서 프론트 개발을 담당했습니다.

### NTTTT - NFT Ticket Trading Town 프론트 개발

- 개발 기간: `2023.03 ~ 2023.05`
- 아티스트 콘서트 사진을 기반으로 한 NFT 티켓 거래 플랫폼 개발했습니다.
  - Ganache를 이용한 로컬 개발 환경에서 개발했습니다.
- 학교 수업 `종합 프로젝트 2`의 프로젝트로써 진행했습니다.
  - 팀원 5명(프론트 2명, 백엔드 3명) 중 프론트 개발을 담당했습니다.
- 구매하고 싶은, 소장하고 싶은 NFT를 UI/UX적으로 구현하고자 노력했습니다.
  - `framer-motion`을 이용해 애니메이션을 구현하였습니다.

#### 해결한 문제

1. 구매하고 싶은, 소장하고 싶은 NFT를 UI/UX적으로 구현하고자 노력했습니다.

   - 사용자(교수님)께서 "형체가 없는 NFT를 구매하고 싶을까?"라고 의문을 제기하셨습니다.
   - 손에 만져지고 구매하고 싶은 NFT를 만들기 위해 UX적으로 접근했습니다.
   - `framer-motion`의 애니메이션과 제스쳐를 이용해 NFT를 인터랙티브하게 만들었습니다.
   - 최종 발표 때 교수님과 학생들에게 라이브 데모를 진행하였습니다.
   - 팀 간 평가 및 교수 평가에서 UI/UX가 인상적이라는 평가를 받으며 `A+`의 성적으로 프로젝트를 마무리했습니다.
   - <a href="https://github.com/NTTTT-NFT-Ticket-Trading-Town/NTTTT-FE/blob/main/public/NTTTT_%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81.gif" target="_blank">
        앱 프리뷰 링크
       </a>

2. `vite-pwa-plugin`의 `workbox`가 `/api` route로의 browser request를 intercept하는 문제를 해결했습니다.

   - `/api`로 리버스 프록시해둔 백엔드 서버의 swagger가 browser에서만 접속되지 않았습니다.
   - `react-router` 혹은 `workbox`가 request를 intercept한다고 판단했습니다.
   - Chrome DevTools의 Network 탭으로 디버깅하여 `workbox`의 문제임을 확인했습니다.
   - `workbox`의 `navigateFallbackDenylist`에 `/api`를 추가해 해결했습니다.
   - <a href="https://github.com/NTTTT-NFT-Ticket-Trading-Town/NTTTT-FE/issues/62" target="_blank">
         Github Issue 링크
       </a>

#### 링크

- <a href="https://github.com/ntttt-nft-ticket-trading-town/ntttt-fe" target="_blank">
    깃헙 리포 링크
  </a>

### 오픈소스 `githru-vscode-ext`에 3290배 성능 향상을 컨트리뷰션

- 개발 기간: `2023.04.26 ~ 2022.04.27`
- `오픈소스 컨트리뷰션 아카데미`에서 진행한 `2023 오픈소스 컨트리뷰톤 대구`에서 참여했습니다.
- `git` 기록을 분석해주는 `githru-vscode-ext`에 참가했습니다.
- `getFileChangesTree()` 함수의 성능을 `3290배` 향상시켰습니다.
  - 성능 개선 내용을 정리해 팀을 대표로 성과를 발표했습니다.
- 반응형 디자인 작업도 진행했습니다.

#### 해결한 문제

1. `getFileChangesTree()` 함수의 성능을 3290배 향상시켰습니다.

   - 테스트한 환경에서 렌더링이 1분 40초 넘게 블로킹되는 문제가 있었습니다.
   - Chrome DevTools의 Performance 탭으로 디버깅하여 `getFileChangesTree()` 함수가 성능 저하의 원인임을 확인했습니다.
   - `Object.entries`로 복사한 객체를 `reduce` 함수에서 불필요하게 구조 분해 할당하는 것을 확인하였습니다.
   - 구조 분해 할당을 직접 할당으로 변경하여 성능을 향상시켰습니다.
   - 성능 향상 후 렌더링이 0.03초로 줄어들며 성능이 3290배 향상되었습니다.
   - <a href="https://github.com/githru/githru-vscode-ext/pull/304" target="_blank">
     머지된 PR 링크
     </a>

1. 임의의 값으로 hard-coded된 media-query를 flexbox로 바꾸어 반응형 디자인을 개선했습니다.

   - 어플리케이션의 너비가 media-query를 통해 고정된 px값으로 설정되어 있었습니다.
   - flexbox를 이용하면 media-query가 필요 없다고 판단했습니다.
     - flex-grow를 이용해 media-query 없이 어플리케이션의 너비가 유동적으로 변하도록 개선했습니다.
   - <a href="https://github.com/githru/githru-vscode-ext/pull/300" target="_blank">
     머지된 PR 링크
     </a>

<details>
<summary>더보기</summary>

### [2022 대구를 빛내는 SW 해커톤] 신청 폼 프론트 개발

- 개발 기간: `2021.08 ~ 2021.09`
- [2022 대구를 빛내는 SW 해커톤]은 컴퓨터학부에서 기획한 해커톤입니다
- 해당 기획으로 SW교육원에 도움과 후원을 요청했습니다
- SW교육원은 **50팀, 180명 이상 지원 받을 것을 요구**했습니다
- 신청을 독려하기 위해 매력적인 신청 폼을 기획하였습니다
- **실시간 지원 현황** 확인과 인터랙티브한 폼을 제작했습니다

#### 역할

- 잘못 적은, 미입력한 데이터가 없도록 폼의 유효성을 검증했습니다.
  - 오류 없이 데이터를 처리하는 것은 신청자와 운영진 모두 필요한 기능이었습니다.
  - `zod`, `react-hook-form`을 이용해 유효성 검사를 구현했습니다
  - 실제로 접수된 **221명** 데이터 중 누락되거나 잘못 적힌 데이터가 없었고 신청자의 항의 메일도 없었습니다
- 백엔드와 REST API를 이용해 데이터를 주고받았습니다
  - 백엔드와의 협업을 위해 API 명세를 작성했습니다
  - `axios`를 이용해 데이터를 주고받았습니다
  - `react-query`를 이용해 주고 받은 데이터를 관리했습니다.
- **Google Analytics**를 이용해 접속자에 대한 정보를 수집했습니다
  - 신청 접수 기간 동안 총 **533명**이 접속했고 총 **2523회** 조회됐음을 확인했습니다

#### 링크

- <a href="https://github.com/chaejunlee/cse-hackathon" target="_blank">
    깃헙 리포 링크
  </a>

### 학회 홈페이지 외주 제작

- 학부 교수님들께 학회 홍보 홈페이지를 의뢰 받아 제작하였습니다
- **빠른 화면 로딩**을 주문 받아 정적인 사이트를 제작하고자 노력했습니다
- 모바일, 데스크탑 환경에서 모두 잘 보이도록 반응형 웹을 구현했습니다

#### 빠른 화면 로딩

- **UCWIT**의 경우 HTML, CSS만을 이용했습니다
  - 개발 기간: `2022.10 ~ 2022.11`
  - 요청하신 페이지 수가 적어서 HTML만으로도 컨텐츠 추가/수정이 어렵지 않았습니다
- **AVSS**의 경우 Astro 프레임워크를 이용했습니다
  - 개발 기간: `2022.12 ~`
  - 요청하신 페이지 수가 많아서 HTML만으로는 추가/수정이 어려웠습니다
  - Composability는 최대화하면서 클라이언트에 전달되는 JS를 최소화하고자 Astro 프레임워크를 사용했습니다
  - Vercel을 이용해 배포하였습니다
  - 잦은 수정 요청에도 2 ~ 3일 안에 요청 사항을 완벽하게 반영했습니다

#### 링크

- <a href="https://computer.knu.ac.kr/ucwit2022" target="_blank">
    UCWIT
  </a>
- <a href="https://github.com/chaejunlee/avss-2023" target="_blank">
    AVSS2023
  </a>

### 다국어 지원 버스 예약 시스템 (영어/스페인어)

- 개발 기간: `2022.10 ~ 2022.12`
- 외국인 버디 활동을 하면서 라틴어를 사용하는 외국을 위한 버스 예약 시스템이 필요함을 느꼈습니다
- 실제 발권까지 구현할 수 없어 배포는 못했지만 실제 서비스를 따라 만들면서 디비 설계 능력을 키웠습니다

#### 역할

- 아이디어를 기획과 기능을 제안했습니다
- ER Diagram 설계, ER Schema 설계, SQL 작성했습니다
- DB를 이용한 웹 서비스 제작에서 프론트 디자인을 맡았습니다
- DB와의 연동을 JDBC로 구현했고 JSP만 사용할 수 있었습니다

#### 어려움

- JSP는 페이지 생성 기술이기 때문에 클라이언트에서 접근할 수 있는 REST API를 구현할 수 없었습니다
- 클라이언트는 서버로부터 페이지 단위로 데이터를 받기 때문에 React 등 JS를 사용해 SPA를 구현하는 것은 불가능했습니다
- 데이터를 처리하는 핵심 기능들은 서버에 의존하는 방식으로 설계했습니다
- 프론트는 JS를 제외시키고 Semantic한 태그들과 CSS만으로 해결하였습니다

#### 기술

- Oracle DB 11g & JDBC
- JSP & CSS

#### 링크

- <a href="https://github.com/chaejunlee/COMP0322" target="_blank">
    깃헙 리포 링크
  </a>
- <a href="https://youtu.be/e_PgEpe5W-E" target="_blank">유튜브 데모 영상</a>

</details>

## 🎓 Studies

### GPA

- `4.22` / `4.3` (2023. 08)

### TOPCIT

- `LEVEL 3` (2023. 05. 20.)
  - 48/65 문제
  - 590점 (상위 10% 474.4점)

### Scholarship

- 정수장학회
  - 2020.03 ~ Present

## 🇺🇸 English Afficiency

### TOEFL

- `98` (2022.08)
  - L: 25, R: 28, S: 21, W: 24

### TOEIC

- `940` (2023.01)
  - LC: 490, RC: 450
- ~`975` (2019.05)~
  - ~LC: 495, RC: 480~

## 📍 Educations

- `(Expected) 2023.08 ~ 2024.05`
  - 산호세주립대학교 교환학생
- `2022.07`
  - The Uni. of Texas at Austin, Academic English Program
- `2019.07`
  - 산호세주립대학교 서머 스쿨
- `2019.03 ~`
  - 경북대학교 컴퓨터학부 학사
