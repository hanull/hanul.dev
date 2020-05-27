---
title: LeeCode_155. Min Stack(java)
date: 2020-05-28 00:05:25
category: algorithms
draft: false
---

### 문제
[문제 링크](https://leetcode.com/problems/min-stack/)

push(), pop(), top(), getMin() 을 구현하고 스택의 최소값을 구하는 문제이다.

### 풀이
1. 연결 리스트 활용
처음에 Stack을 직접 구현해서 활용하는 문제로 생각을 했고, 연결 리스트를 통해 스택을 구현하게 됐다. 먼저 이너 클래스로
노드를 생성해 주었고, 최소값은 top 노드부터 마지막 노드까지 n번 탐색을 통해 구했다.

```java
class MinStack {
    private Node topNode;
    private int size;
    private class Node{
        private int data;
        public Node next;
        public Node(int data){
            this.data = data;
        }
    }
    /** initialize your data structure here. */
    public MinStack() {
        topNode = null;
        size=0;
    }

    public void push(int x) {
        Node nextNode = new Node(x);
        if (size == 0){
            topNode = nextNode;
        }else{
            nextNode.next = topNode;
            topNode = nextNode;
        }
        size++;
    }

    public void pop() {
        topNode = topNode.next;
        size--;
    }

    public int top() {
        return (topNode.data);
    }

    public int getMin() {
        int res=Integer.MAX_VALUE;
        Node tmp = topNode;
        while (tmp != null){
            int k = tmp.data;
            if (res > k)
                res = k;
            tmp = tmp.next;
        }
        return (res);
    }
}
```

2. Stack 클래스 사용
(input으로 들어오는 값, 갱신된 최소값)을 갖는 노드를 스택에 쌓는 방법으로 풀었다. 즉, 생성되는 노드 위치마다 최소값을 갱신하는 방법이다. 예를 들어, [1, 2, 3, 4, 0 ] 5개의 input을 push() 한다면 아래와 같이 스택에 쌓이게 되고

```
input	min
 0		0
 4		1
 3		1
 2		1
 1		1
```

```java
class MinStack {

    class Node{
        int val, min;
        Node(int val, int min){
            this.val = val;
            this.min = min;
        }
    }

    Stack<Node> stack = new Stack<>();

    /** initialize your data structure here. */
    public MinStack() {

    }

    public void push(int x) {
        if (stack.isEmpty()){
            stack.push(new Node(x,x));
        }else{
            stack.push(new Node(x, x<stack.peek().min ? x : stack.peek().min));
        }
    }

    public void pop() {
        stack.pop();
    }

    public int top() {
        return stack.peek().val;
    }

    public int getMin() {
        return stack.peek().min;
    }
}
```
