---
title: TIL 9(2021 02 15) 비트마스킹, nextpermutation, 아기상어 지옥
date: 2021-02-16 01:02:07
category: til
draft: false
---

## Facts (한 것) && Feelings (느낀 것)
- ssafy
  - 힙, comparable, comparator 정리
  - 비트마스크를 사용한 순열 구현
  - nextPermutation() 구현
  - 18:30 - 20:00 까지 알고리즘 보충 수업
    - swea 수의 새로운 연산 문제 풀이
  - 긴 연휴 동안 공부를 너무 안했더니 살짝 감을 잃은 듯한 느낌이었다. 그리고 자꾸 TIL을 스킵하고 넘어가는 날이 많아지고 있는데, 간단하게라도 매일 작성하려고 노력해야겠다.

- 스터디
  - 20:00 ~ 01:25
  - 삼성 기출 시뮬레이션 2문제를 풀었다. 아기 상어를 몇시간 동안 죽어라 붙잡고 있었는데 결국 풀어서 뿌듯하다. 꿀잠 자겠다. 
  - 시뮬레이션 문제는 잘 읽고, 잘 정리하는게 중요한 것 같은데 이 부분이 아직 부족한 것 같다. 먼저 코드를 작성하지 말고, 정확하게 로직을 생각한 뒤 구현하자.


## Findings (배운 것)
- 알고리즘 풀 때, 정확하게 로직을 생각한 뒤에 코드를 구현해야겠다고 뼈저리게 느꼈다. 특히 시뮬레이션 문제는 더더더더욱 신경써서 로직을 작성하자.
- nextPermutation()

```java
boolean nextPermutation() {
    int i = N - 1;
    while(i > 0 && input[i-1] >= input[i]) i--;

    if (i == 0) return false;

    int j = N - 1;
    while (input[i-1] >= input[j]) j--;

    swap(i-1, j);

    j = N - 1;
    while (i< j) {
        swap(i++, j--);
    }

    return true;
}

```


## Future (할 것)
- 주간 계획 설정 (노션)
- 러닝
- 알고리즘 오답 노트 정리
  - 오큰수, 다리놓기, 이항계수, 아기 상어, 배열 돌리기
- 싸피 수업 복습
- 자바 라이브 스터디 정의
  - 예외처리

