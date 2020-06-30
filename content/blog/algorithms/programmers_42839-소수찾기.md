---
title: programmers_42839 소수찾기
date: 2020-06-30 18:06:38
category: algorithms
draft: false
---

## 문제
[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42839)


## 접근
문자열 numbers로 만들 수 있는 모든 숫자를 생각해봐야한다. 따라서 완탐 문제이다.

최대 7자릿수의 문자열이므로 시간이 부족하지 않을 것이라 생각했지만, 첫 결과 시간초과가 나왔다.

왜냐하면 하나씩 모두 비교하는 비효율적인 코드를 구현했기 때문이다. numbers로 만들수 있는 최대값(max) 보다 작은 소수를 먼저 찾고, numbers문자열과 하나씩 비교하여 만들 수 있는 값을 찾는 방법을 사용했다.

시간을 줄이고자 소수 찾는 방법을 에라토스테네스의 체로 다시 구현했고, 다행히 통과했다.




## 풀이
1. input 문자열을 int형 배열로 변환한다.
2. input으로 만들 수 있는 max 값을 구한다.
3. max 까지의 범위에서 소수값을 구한다.
4. 소수값(x)를 문자열로 변환하여 input 숫자와 하나씩 비교하면서 만들 수 있는 숫자인지 확인한다.
ex) 소수 23을 보자.
- 먼저 2를 input을 0번 인덱스부터 확인하며 2가 존재하는지 확인한다.
  - 존재할 시, cnt++
- 이런 방법으로 2, 3을 input에서 모두 확인하고, 최종적으로 (cnt == 소수의 길이) 같을 경우
만들 수 있는 숫자이므로 결과 카운트를 증가시켜준다.



```java
  public static int solution(String numbers) {
    int[] arrNums = Arrays.stream(numbers.split(""))
        .sorted(Comparator.reverseOrder())
        .mapToInt(x -> Integer.valueOf(x))
        .toArray();
    int max = 0;
    for(int i=0; i<arrNums.length; i++) {
      max += arrNums[i]* Math.pow(10,arrNums.length - 1 - i);
    }
    int [] prime = new int[max+1];
    Arrays.setAll(prime, i -> i);
    prime[1]=0;
    for(int i=2; i<=max; i++) {
      if (prime[i] == 0) continue;
      for(int j=i*2; j<=max; j+=i) {
        prime[j] = 0;
      }
    }
    int cnt = 0;
    for(int i=2; i<=max; i++) {
      if (prime[i] !=0 && isPossible(i, arrNums))
        cnt++;
    }
    return cnt;
  }

  public static boolean isPossible(int x, int[] arr) {
    boolean[] check = new boolean[arr.length];
    String str = String.valueOf(x);
    int cnt = 0;
    // 소수이면서, 주어진 숫자로 만들 수 있는 값만 리턴
    for(int i=0; i<str.length(); i++) {
      int tmp = str.charAt(i) - '0';
      for(int j=0; j<arr.length; j++) {
        if (!check[j] && tmp == arr[j]) {
          check[j] = true;
          cnt++;
          break;
        }
      }
    }
    return cnt != str.length() ? false : true;
  }
```


### <다른 분들의 효율적인 코드>
1. set 자료구조를 사용해서 먼저 가능한 모든 숫자를 구한다. permutation() 구현이 너무나 멋졌다.
  - 이 부분이 핵심이었던 문제라고 생각한다. 나는 생각하지 못했지만.. 모든 경우를 integer 형식으로 set에 저장.
2. 그 중 소수인 값을 찾는다.
3. 최종 cnt를 리턴.



```java
public static int solution(String numbers) {
    HashSet<Integer> set = new HashSet<>();
    permutation("", numbers, set);
    int cnt = 0;
    while (set.iterator().hasNext()) {
      int num = set.iterator().next();
      set.remove(num);
      if (num == 2) cnt++;
      if (num%2 != 0 && isPrime(num))
        cnt++;
    }
    return cnt;
  }

  public static boolean isPrime(int num) {
    if (num == 0 || num == 1) return false;
    for (int i=3; i<=Math.sqrt(num); i+=2) {
      if (num%i==0) return false;
    }
    return true;
  }
  public static void permutation(String prefix, String str, HashSet<Integer> set) {
    int len = str.length();

    if (!prefix.equals("")) {
      set.add(Integer.valueOf(prefix));
    }
    for(int i=0; i<len; i++) {
      permutation(prefix + str.charAt(i), str.substring(0,i) + str.substring(i+1, len), set);
    }
  }
```
