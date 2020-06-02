---
title: 스택(stack)을 활용하여 후위연산 계산기 구현하기
date: 2020-06-02 16:06:53
category: datastructure
draft: false
---

연산을 수행할 때 사람들은 (2+3)*4 처럼 중위 표기법을 사용하지만, 컴퓨터에서는 후위 표기법을 사용하여 계산을 수행한다.
후위 표기법이란? 연산자를 피연산자 뒤에 놓는 방법이다. 그리고 괄호가 없어도 계산 순서가 일정하다. ex) (2+3)*4  ===> 23+4*
이제 중위 표기법을 어떻게 후위 표기법으로 바꾸고 계산을 수행하는지 보자.


## <접근법>
컴퓨터에서의 수식 계산은 `(1)중위 수식을 후위 수식으로 바꾸고`, `(2)후위 수식을 계산` 하는 두 과정으로 이루어진다.

### (1) 중위 수식 -> 후위 수식
1. 수식의 요소를 하나씩 읽는다.
2. 숫자일 경우, 문자열(postFix)에 담는다.
3. 연산자일 경우, 스택에 쌓는다.

  - 만약 해당 연산자보다 스택 최상위 노드에 있는 연산자의 우선순위가 더 높은 경우, 최상위 노드를 pop()하고 문자열(postFix)에 추가 한다.

  - 그리고 해당 연산자를 스택에 쌓는다.

4. '(' 일 경우, 가중치에 관계없이 무조건 스택에 쌓는다.
5.  ')' 를 만나는 순간, 스택 최상위 노드부터 '(' 를 만날 때 까지 pop()하고 문자열에 추가 한다. 단, '(' 는 문자열(postFix)에 추가하지 않는다.
6. 더 읽을 수식이 없다면 끝내고, 있다면 1번부터 반복 수행


***<연산자 우선순위>***
- *, / : 1순위 (가중치가 가장 큼)
- +, - : 2순위
- (    : 3순위


### (2) 후위 수식 계산
1. 변경 된 후위 수식의 요소를 하나씩 읽는다.
2. 숫자일 경우, 스택에 쌓는다.
3. 연산자를 만나는 순간, 스택에서 2개의 숫자를 pop() 한 뒤, 해당 연산자를 통해 계산을 수행한다.
4. 계산한 값을 다시 스택에 쌓는다.
5. 스택 사이즈만큼 반복 수행하면, 스택에는 하나의 값이 담겨있게 되며, 최종적으로 후위 수식 계산값이 된다.


## <고민했던 부분>
- 두 자릿수 이상의 숫자가 들어왔을 때, 어떻게 처리해야할지 많은 시간 고민했다.
  - 공백을 추가하여 해결하였다. 요소가 숫자일 경우, 연산자를 만나기 전까지 수행한 뒤 공백을 추가.
  - ex) 235+4-1  ----->  235 4 + 1 -

- 연산의 수행 도중 int max value를 넘어갈 경우.
  - input은 int max를 초과하지 않는다고 가정하였고, 계산 결과가 int를 초과할 것을 생각하여 long형으로 변경하였다.


## <구현한 메소드>

```
public static String infix_to_postfix(String input);			// 중위 수식을 후위 수식으로 변경
public static boolean isDigit(char ch);							// 해당 문자가 숫자인지 검사
public static boolean isOperator(char operator);				// 해당 문자가 연산자인지 검사
public static int priority(char operator);						// 해당 문자의 우선순위 확인

public static long tmpCal(long tmp1, long tmp2, char operator);	//
public static long cal(String postFix);							// 후위 수식을 활용하며 최종값을 계산
```


## <구현 코드>

```java
  public static String infix_to_postfix(String input){
    String posFix = "";
    Stack<Character> stack = new Stack<>();
    int inputLength = input.length();
    int index = 0;
    while (index < inputLength) {
      char operator = input.charAt(index);
      if (isDigit(operator)) {   // 숫자 일 때, 숫자가 끝날 때 까지 문자열에 추가
        while (index < inputLength && isDigit(input.charAt(index))) {
          posFix+=input.charAt(index);
          index++;
        }
        posFix+=' ';
      }
      else {      // 연산자 일 때, 스택에 푸시
        if (operator == '(') {
          stack.push(operator);
          index++;
        }
        else if (operator == ')') { // 닫힌 괄호( ')' )를 만나면, 스택에서 열린 괄호( '(' ) 나올 때 까지 연산자 pop
          while (stack.peek()!='(') {
            posFix+=stack.pop();
            posFix+=' ';
          }
          stack.pop();
          index++;
        }
        else if (isOperator(operator)) { // 연산자라면, 스택 최상위 노드의 데이터와 우선순위 비교를 한다
          if (!stack.isEmpty() && priority(stack.peek()) >= priority(operator)) {
            posFix+=stack.pop();
            posFix+=' ';
          }
          stack.push(operator);
          index++;
        }
        else
          throw new IllegalArgumentException("입력한 수식이 잘못되었습니다.");
      }
    }
    while (!stack.isEmpty()) {
      posFix+=stack.pop();
      posFix+=" ";
    }
    return posFix;
  }

public static boolean isDigit(char ch) {
	int tmp = ch-'0';
	return (tmp>=0&&tmp<=9 ? true : false);
}

public static boolean isOperator(char operator) {
	return (operator=='-' || operator=='+' || operator=='*' || operator=='/');
}

public static int priority(char operator) {
	if (operator == '(') {
		return 0;
	}else if (operator == '-' || operator == '+') {
		return 1;
	}else if (operator == '*' || operator == '/') {
		return 2;
	}
	return -1;
}

public static long tmpCal(long tmp1, long tmp2, char operator) {
	if(operator=='+') {
		return (tmp1 + tmp2);
	}else if(operator=='-') {
		return (tmp1 - tmp2);
	}else if(operator=='*') {
		return (tmp1 * tmp2);
	}else {
		return (tmp1 / tmp2);
	}
}

public static long cal(String postFix) {	// 후위 수식을 공백을 기준으로 스플릿 한 뒤, 계산 수행
	Stack<Long> stack = new Stack<>();
	String[] splitPostFix = postFix.split(" ");
	long tmp1,tmp2;
	for(int i=0; i<splitPostFix.length; i++) {
		if (isOperator(splitPostFix[i].charAt(0))) {
		tmp1=stack.pop();
		tmp2=stack.pop();
		stack.push(tmpCal(tmp1,tmp2, splitPostFix[i].charAt(0)));
		}else {
		stack.push(Long.valueOf(splitPostFix[i]));
		}
	}
	return stack.pop();
}
```

```java
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
String inputStr = sc.next();
System.out.println("Infix : " + inputStr);
System.out.println("Postfix : " + infix_to_postfix(inputStr));
System.out.println(cal(infix_to_postfix(inputStr)));
}
```

```
Input : (2+5)*3*(2+1)
Postfix : 2 5 + 3 * 2 1 + *
63
```
