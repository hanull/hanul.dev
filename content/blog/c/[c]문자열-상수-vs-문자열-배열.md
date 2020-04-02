---
title: "[c]문자열 상수 vs 문자열 배열"
date: 2020-02-28 15:02:61
category: c
draft: false
---

### 문자열 상수 vs 문자열 배열

이를 이해하기 위해서는 먼저, 메모리 구조를 이해하고 있어야 한다. 이 부분은 다음 포스팅에서 다루도록 하겠다.

```c++
char *s1 = "abcdefg";
char s2[8] = "abcdefg";
```

- 첫 번째 s1의 경우 `데이터 영역`에 "abcdefg" 를 저장하고, 이 영역의 시작 주소를 s1에 대입한다.

- 즉, s1자체는 변경 가능한 포인터 변수이지만, s1이 가리키고 있는 문자열은 문자열 상수이므로 변경할 수 없다.

- 반대로 s2는 `스택 영역`에 "abcdefg" 를 저장하고, 배열의 가장 앞을 가르키는 것을 뜻한다.

  > [참고](blog.naver.com/PostView.nhn?blogId=ahalinux&logNo=220768423009&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
