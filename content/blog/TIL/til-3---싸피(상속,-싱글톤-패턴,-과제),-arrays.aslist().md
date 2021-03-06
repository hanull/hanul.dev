---
title: TIL 3 - 싸피(상속, 싱글톤 패턴, 과제), Arrays.asList()
date: 2021-01-23 00:01:02
category: til
draft: false
---

## Facts (한 것) && Feelings (느낀 것)
- ssafy
  - 상속, 업캐스팅과 다운캐스팅, super(), 싱글톤 패턴
  - 부모 참조 변수가 자식 클래스를 생성할 때 어떻게 메모리에 할당되는지 궁금했었는데 수업을 들으면서 확실히 이해할 수 있었다. 
  - 싱글톤 패턴의 특징을 배웠고 왜 사용하는지, 문제점이 무엇인지 알게되었다. 동기화, 멀티 스레드 환경에서 문제가 발생할 수 있다는 점이 있는데 이 부분은 좀 더 공부가 필요할 것 같다.

- 알고리즘
  - 한 문제도 못풀었다. 싸피 내용 복습하고, 과제를 진행하니 하루가 끝.. 앞으로도 오늘처럼 빡빡할 것 같은데 그래도 반드시 하루 1문제 이상 알고리즘을 우선 순위에 두고 꾸준하게 풀자.

- 모코각
  - 20시 30분부터 24시까지 진행
  - 수업 내용을 복습하고 과제를 진행했다. 왜 싱글턴을 사용해야하는지 감은 잡을 수 있었다.
  - Arrays.asList() 정리했다.
  - primitive type, reference type 을 리스트로 바꾸는 방법을 이해했다.

## Findings (배운 것)
- 자식 클래스 객체를 생성할 때(부모 참조) 메모리 할당은 어떻게 되는지 알게되었다.
  ㄴ- Object, Parent, Chile 클래스가 메모리 할당되고, 부모의 주소를 참조한다. 메소드가 Parent 공간에 없다면 Object 공간으로 올라가서 찾는다. Object 공간에도 없다면 에러를 발생한다.
- 자식 클래스를  참조하고 싶다면, 업캐스팅 된 객체를 다운 캐스팅하면 된다.
  - 업캐스팅된 것을 다시 원상태로 돌리는 것. 컴파일 시점에는 오류가 발생하지 않아도 런타임 오류가 발생한다.ㄴ

- Arrays.asList()가 평소 자주 썼던 ArrayList 와 다르다는 것을 알게되었다.
  - Arrays.asList()는 원본 배열의 주소값만 가진다. 
  - 공간에 변화를 줄 수 없다.
  - 동적인 ArrayList를 사용하기 위해서는 새로운 ArrayList객체를 생성해야한다.

## Future (할 것)
- 다수니랑 여행 잘 다녀오기
- [책 읽기] 객체지향의 사실과 오해 3장
- 싸피 과제 복습하기
