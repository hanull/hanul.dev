---
title: String, StringBuilder, StringBuffer 비교하기
date: 2021-06-09 00:06:71
category: java
draft: false
---

알고리즘 문제 풀이 중 메모리 초과를 경험했다. 원인은 문자열(String)의 어떠한 특성 떄문이었고, StringBuilder로 변경하여 메모리 초과를 해결할 수 있었다. 

String, StringBuilder, StringBuffer 각각의 특성을 이해하고 어떤점이 다른지 보자.



## String은 불변(immutable)하다

한 번 생성되면 변경될 수 없고, 할당된 메모리 공간이 변하지 않음을 의미한다.

```java
String str = *new* String("hello");

str += " bye";
```

위의 예제를 보면 먼저 "hello"라는 String객체가 heap 영역에 생성되고 str은 해당 객체를 참조하게 된다. 그 다음 str에 + 연산을 통하여 bye 문자열을 더하는데 이 때, hello 영역에 추가되는 것이 아니고, 새로운 문자열 객체("hello bye")를 만들고 그 객체를 다시 참조하게 되는 것이다. 그리고 기존에 참조했던 "hello" 영역의 객체는 `unreachable` 상태가 되어 GC의 대상이 된다.



### 그래서 String은 언제 사용하는 것이 좋은데?

String은 불변성이라는 특성을 가지기 때문에 변하지 않는 문자열을 자주 읽어들이는 경우 사용하면 좋은 성능을 기대할 수 있다. 하지만, 문자열 추가, 수정, 삭제가 빈번하게 발생하는 경우 String을 사용하면 많은 가비지(Garbage)가 생성되어 힙메모리 부족으로 성능에 영향을 끼치게 된다. 이를 해결하기 위해서 사용하는 것이 `StringBuilder, StringBuffer` 이다.



## StringBuffer / StringBuffer

String과 반대로 `가변성`을 가진다. 이미 생성된 문자열을 .append() .delete() 등을 사용하여 변경할 수 있다. 따라서 변경될 때마다 새롭게 객체를 생성하는 String 보다 더 빠르고, 이러한 장점 때문에 문자열의 추가,수정,삭제가 빈번하게 발생할 경우 StringBuffer/StringBuilder를 사용해야한다.

```java
StringBuilder sb = *new* StringBuilder("hello");

sb.append(" bye");
```



### 그런데 StringBuilder와 StringBuffer의 차이점은 뭐야?

`동기화`의 유무이다. StringBuilder의 경우 동기화를 보장하지 않지만, StringBuffer의 경우 동기화를 보장한다.

StringBuffer는 동기화를 지원하기 때문에 멀티 쓰레드 환경에서 안전하다(thread-safe). 반대로 StringBuilder는 동기화를 지원하지 않기 때문에 멀티 쓰레드 환경에서 사용하는 것은 적합하지 않다. 하지만, 동기화를 고려하지 않는 만큼 단일 쓰레드에서의 성능은 StringBuffer 보다 뛰어나다. (String도 불변성을 가지기때문에 마찬가지로 멀티쓰레드 환경에서의 안정성(thread-safe)을 가진다.)





### 참고

- [String, StringBuilder, StringBuffer비교](https://ifuwanna.tistory.com/221)

- [StringBuilder와 StringBuffer의 성능차이](https://madplay.github.io/post/difference-between-string-stringbuilder-and-stringbuffer-in-java)

