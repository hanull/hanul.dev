---
title: 연결 리스트(linked list) 자바로 구현하기
date: 2020-05-21 19:05:71
category: DataStructure
draft: false
---

## 연결 리스트(Linked List)
`연결 리스트란` 각 노드가 서로 연결되어 있는 방식으로 데이터가 저장돼 있는 추상적 자료형이다. 각 노드는 `데이터 필드`와 `다음 노드에 대한 참조`로 구성되어 있다. 마지막 노드의 포인터는 NULL 값을 갖는다.

![](https://github.com/hanull/TIL/blob/master/DataStructure/img/Linkedlist.png)


### 왜 배열이 아닌 연결 리스트를 사용할까??
배열은 비슷한 유형의 선형 데이터를 저장하는데 사용할 수 있지만 제한 사항이 있다.
1. 배열의 크기가 고정되어 있어 미리 요소의 크기에 대해 할당 받아야한다.
2. 새로운 요소를 삽입하는 것은 비용이 많이 든다. (공간을 만들고, 기존 요소들을 재배치 해야한다.)


### 연결 리스트의 장점
- 데이터가 메모리상의 연속된 위치에 저장되지 않아도 되며, 일반적으로 떨어진 영역에 저장된다.
- 메모리 관리가 용이하다. 데이터가 입력될 때마다 동적할당으로 새로운 메모리 주소에 값을 할당하고 이전 자료와 연결해준다.
- 노드의 삽입, 삭제가 용이하다.

### 연결 리스트의 단점
- 흩어져 저장돼 있으므로 포인터를 처음부터 순서대로 따라가야만 원하는 데이터에 접근할 수 있다.(이를 순차 접근 or 시퀀셜 액세스라고 한다) 즉, 임의로 액세스를 허용할 수 없다.
- 접근 속도가 느리다.
- 연결을 위한 링크(포인터) 부분이 필요하기 때문에 배열에 비해 기억공간 이용 효율이 좋지 않다.
- 중간 노드 연결이 끊어지면 그 다음 노드를 찾기 힘들다.


### 연결 리스트 구현
#### 1. 노드 생성
나중에 연산 횟수를 줄이기 위해 head, tail, size 값을 갱신해 나가는 방법으로 구현했다.
data는 노드의 인풋값이고, next는 다음 노드를 가르키는 참조값이다.

```java
public class LinkedList {
   private Node head;
   private Node tail;
   private int size = 0;

   private class Node{
     private Object data;
     private Node next;
     public Node(Object input) {
       this.data = input;
       this.next = null;
     }
     public String toString() {
       return String.valueOf(this.data);
     }
   }
}
```

#### 2. 데이터 추가
- 노드의 가장 앞쪽에 추가

```java
public void addFirst(Object input) {
    Node newNode = new Node(input);
    newNode.next = head;
    head = newNode;
    size++;
    if (head.next == null) {
       tail = head;
    }
}
```

- 노드의 가장 뒤쪽에 추가

```java
public void addLast(Object input) {
    Node newNode = new Node(input);
    if (size == 0) {
       addFirst(input);
    }
    else {
       tail.next = newNode;
       tail = newNode;
       size++;
    }
}
```

#### 3. 특정 노드 찾기

```java
public Node searchNode(int idx) {
    int i = 0;
    Node res = head;
    while (i != idx) {
      res = res.next;
      i++;
    }
    return res;
}
```

#### 4. 노드의 중간에 데이터 추가

```java
public void addNode(int idx, Object input) {
	if (idx == 0) {
	addFirst(input);
	}
	else if (idx >= size) {
	addLast(input);
	}
	else {
	Node newNode = new Node(input);
	Node preNode = searchNode(idx-1);
	Node nextNode = preNode.next;
	preNode.next = newNode;
	newNode.next = nextNode;
	size++;
	}
}
```

#### 5. 리스트 삭제

```java
public void deleteFirst() {
	Node delNode = null;
	if (size == 0)
	return ;
	if (size == 1) {
	head = null;
	tail = null;
	size = 0;
	}else {
	delNode = head;
	Node tmp = delNode.next;
	head = tmp;
	delNode = null;
	size--;
	}
}
```

```java
public void deleteLast() {
	if (size == 0)
	return ;
	if (size == 1) {
	deleteFirst();
	}else {
	Node preNode = searchNode(size - 2);
	preNode.next = null;
	tail = preNode;
	size--;
	}
}
```

```java
public void deleteNode(int idx) {
	if (size == 0 || idx < 0)
	return ;
	if (idx == 0 || size == 1) {
	deleteFirst();
	}else if (idx >= size - 1) {
	deleteLast();
	}else {
	Node delNode = searchNode(idx);
	Node NextNode = delNode.next;
	Node preNode = searchNode(idx - 1);
	preNode.next = NextNode;
	delNode.next = null;
	size--;
	}
}
```

#### 6. 리스트 출력

```java
public void printList() {
	Node tmp = head;
	while (tmp != null) {
	System.out.print(tmp.data + " ");
	tmp = tmp.next;
	}
	System.out.println();
}
```

만약 System.out.print()를 통해 리스트를 출력하고 싶다면 toString() 오버라이딩하여 사용하면 된다.
