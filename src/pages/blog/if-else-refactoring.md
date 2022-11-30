---
layout: "../../layouts/BlogPost.astro"
title: "if else를 가독성 높게 리팩토링 하는 법"
description: "switch 문을 이용한 뒤 객체를 이용하는 방법으로 최적화 시키기"
pubDate: "2022.11.27"
heroImage: "/blog/if-else-refactoring/thumbnail.png"
---

[원본 영상 링크](https://www.youtube.com/watch?v=p0YEviesgRM&t=1039s&ab_channel=FE%EC%9E%AC%EB%82%A8)

## if else === '가독성 나쁨'

깊게 Nesting 된 if else 문은 가독성도 떨어져 유지 보수가 어렵다.
이러한 if else 문은 최종적으로 객체와 함수의 조합으로 만들어 내는 것이 가장 가독성이 좋다.

그렇다면 if else 문을 어떻게 가독성이 좋게 만들 수 있을까?

## switch 문으로 바꿔라

첫번째 방법은 switch문으로 바꾸는 것이다.
조건들을 switch 문으로 바꾸면 가독성이 좋아진다.
또 새로운 데이터를 추가할 때도 if else를 추가하는 등의 verbose한 작업을 하지 않아도 된다.

하지만 각 case마다 존재하는 break;가 조금 거슬린다.
그러면 switch 문을 따로 함수로 빼낼 수 있다.
곧바로 return을 해버리면 break을 없앨 수 있다.

그런데 case의 조건으로는 discrete한 값만 설정할 수 있다.
범위에 따라 분기를 하고 싶다면 처리하기 까다로울 것이다.
그렇다면 조건 간의 패턴을 찾거나 강제시키자.

## 패턴을 찾아 (함수) 객체로 바꿔라

switch 문으로 잘 바꿨다면 어느 정도 패턴이 존재할 것이다.
이 패턴을 잘 이용해서 switch 문을 Map과 같은 key-value 객체로 바꿔보자.

그러면 조건문은 단 한 줄로 줄어든다.
패턴을 강제시키기 위한 helper function도 최대 한 줄로 줄어들게 된다.

### Example 1

![example_1](/blog/if-else-refactoring/example_1.png)

### Example 2

![example_2](/blog/if-else-refactoring/example_2.png)

### Example 3

![example_3](/blog/if-else-refactoring/example_3.png)

## 느낀점

최근 리액트에서 JS로 돌아와 기본을 공부하면서 깔끔한 코드을 작성에 많은 신경 쓰고 있다.
그러다 구독하고 있는 유튜버 FE재남 님이 올리신 JS 미세팁 영상을 보았고 꽤나 큰 충격을 받았다.
깔끔하고 명료한 프로그램을 짤 수 있는 좋은 테크닉을 배웠다.
앞으로 if else 문이 존재하는 코드를 짜게 되거나 마주한다면 switch 문으로 바꾸고 Map 등의 객체로 바꾸는 방법을 시도해봐야겠다.
