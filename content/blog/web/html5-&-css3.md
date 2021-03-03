---
title: HTML5 & CSS3
date: 2021-03-02 22:03:11
category: web
draft: false
---

## HTML, CSS 이해하기

- 사용되는 언어
  - HTML(HyperText Markup Language) : 구조담당
  - CSS(Cascading Style Sheets) : 디자인담당
  - JavaScript : 동작담당
  - 최근에는 JS가 모든 것을 함
- 웹페이지에서 CSS없애고 보는 방법
  - 개발자도구 - Console창 `document.head.parentNode.removeChild(document.head);`
  - Head를 지워서 CSS를 사라지게 함



## HTML 태그와 속성

### 태그

- 시작 태그, 끝 태크로 이루어짐.

```html
<h1> Hello </h1>
```

- 시작 태그와 끝 태그를 함께 입력하는 요소도 존재한다. XHTML 이라고 함.

```html
<br/>, <img/>
```

웹페이지는 `<html>`로 시작해서 `</html>`로 끝난다.



### 속성

태그에 추가 정보를 부여할 때, 사용한다. 

```html
// title : 속성 이름
// header : 속성 값
<h1 title = "header">
  Hello
</h1>
```



| 글로벌 속성 | 설명                                                         |
| ----------- | ------------------------------------------------------------ |
| class       | tag에 적용할 스타일의 이름 지정<br />중복허용 O              |
| id          | tag에 유일한 ID 지정. 주로 자바스크립트에서 사용<br />중복허용 X |
| style       | 인라인 스타일을 적용하기 위해서 사용                         |
| title       | tag에 추가 정보를 지정. tag에 마우스 포인터를 위치시킬 경우 title의 값 표시 |



## 글자 태그

### 제목

- h1 ~ h6 태그가 존재한다. h1 태그는 가장 큰 제목, h6 태그는 가장 작은 제목을 의미한다.

### 본문

| 태그명 | 설명                                                         |
| ------ | ------------------------------------------------------------ |
| p      | 사용하면 내용 앞뒤로 빈 줄이 생기면서 단락이 생긴다. (block level 태그) |
| br     | 줄바꿈 태그                                                  |
| hr     | 수평 줄 태그                                                 |

<p> p 태그 </p>

br 태그1 <br>br 태그2

<hr>

### `<p>` 태그와 `<br>` 태그의 차이점

`<p>` 태그는 "하나의 문단을 묶어주는 태그"로 사용되기 때문에 문단이 끝나고 난 뒤에 줄이 바뀌는 것이고  부가적인 속성을 지정해 줄 수 있지만, `<br>` 태그는 "단순 줄을 바꾸는 기능"만을 가진 태그이다.



### 앵커 태그

서로 다른 웹 페이지 사이를 이동하거나 웹 페이지 내부에서 특정 위치로 이동할 때 사용하는 태그

- a 태그의 href 속성을 함께 사용한다.

```html
<a href = "www.naver.com">naver</a>
```

| 속성    | 설명                                                   |
| ------- | ------------------------------------------------------ |
| _blank  | 새로운 탭 or 창                                        |
| _self   | 현재 탭 or 창                                          |
| _parent | 현재 화면을 불러낸 부모 탭 or 창, 없으면 현재 탭 or 창 |
| _top    | 최상위 탭 or 창, 없으면 현재 탭 or 창                  |



### 글자 형태

<b> <b 태그>  굵은 글자 태그</b>

<i> <i 태그> 기울어진 글자 태그</i>

<small> <small 태그> 작은 글자 태그</small>

<sub> <sub 태그> 아래에 달라 붙는 글자 태그 </sub>

<sup><sup 태그> 위에 달라 붙는 글자 태그 </sup>

<ins> <ins 태그>  밑줄 글자 태그 </ins>

<del> <del 태그> 가운데 줄이 그어진 글자 태그 </del>



## 목록 태그

| 태그명 | 설명                                             |
| ------ | ------------------------------------------------ |
| ul     | 번호 없는 목록을 표시. 항목 앞에 심볼을 표시     |
| ol     | 번호 있는 목록을 표시. 숫자, 알파벳, 등으로 표시 |
| li     | 목록 항목 ul, ol 의 하위에서 사용                |
| dl     | 용어 정의와 설명에 대한 내용을 목록화해서 표시   |
| dt     | 용어 목록의 정의 부분을 나타냄                   |
| dd     | 용어 목록의 설명 부분을 나타냄                   |

| 속성     | 속성값 | 설명            |
| -------- | ------ | --------------- |
| type     | 1      | 숫자 (기본값)   |
|          | a      | 영문 소문자     |
|          | A      | 영문 대문자     |
|          | i      | 로마숫자 소문자 |
|          | I      | 로마숫자 대문자 |
| start    | 숫자   | 시작 번호       |
| reversed |        | 역순으로 표시   |



```html
<h2>ol tag</h2>
<ol>
  <li>facebook</li>
  <li>Tweeter</li>
  <li>Linked</li>
</ol>

<h2>ul tag</h2>
<ul>
  <li>facebook</li>
  <li>Tweeter</li>
  <li>Linked</li>
</ul>
```

<h2>ol tag</h2>

<ol start = "100">
  <li>facebook</li>
  <li>Tweeter</li>
  <li>Linked</li>
</ol>


<h2>ul tag</h2>
<ul>
  <li>facebook</li>
  <li>Tweeter</li>
  <li>Linked</li>
</ul>



## 테이블 태그

```html
<table>
  <thead>	// table head
    <tr>
      <th>Header1</th>	
      <th>Header2</th>
	  </tr>
  </thead>
  
  <tbody>	// table body
    <tr>
      <td>Data1</td>
      <td>Data2</td>
    </tr>
		<tr>
      <td>Data1</td>
      <td>Data2</td>
    </tr>
  </tbody>
</table>
```

<table>
  <thead>
    <tr>
      <th>Header1</th>	
      <th>Header2</th>
	  </tr>
  </thead>

<table>  
  <tbody>
    <tr>
      <td>Data1</td>
      <td>Data2</td>
    </tr>
		<tr>
      <td>Data1</td>
      <td>Data2</td>
    </tr>
  </tbody>
</table>



## input 태그

사용자에게 정보를 입력받는 기능을 수행하는 태그이다. type에 따라 어떤 형식으로 정보를 받을지 결정된다.

```html
<input type = "유형" 속성 = "속성값">
```

| type 키워드    | 설명                                                         |
| -------------- | ------------------------------------------------------------ |
| button         | 버튼을 생성                                                  |
| checkbox       | 체크박스 (2개 이상 선택 가능)                                |
| file           | 파일을 첨부할 수 있는 버튼                                   |
| hidden         | 사용자에게는 보이지 않는다. 서버로 값을 보낼 때 사용         |
| image          | 이미지 형태를 생성                                           |
| password       | 비밀번호 입력 양식 생성                                      |
| radio          | 라디오 버튼 (1개만 선택 가능)                                |
| reset          | 초기화 버튼 생성                                             |
| submit         | 제출 버튼 생성                                               |
| text           | 한 줄짜리 텍스트 상자 생성                                   |
| color          | 색상 선택                                                    |
| date           | 사용자 지역을 기준으로 한 날짜 (연, 월, 일)                  |
| datetime       | 국제 표준시로 설정된 날짜와 시간(연, 월, 일, 시, 분, 초, 분할 초) |
| datetime-local | 사용자가 있는 지역을 기준으로 한 날짜와 시간(연, 월, 일, 시, 분, 초, 분할 초) |
| month          | 사용자 지역을 기준으로 한 날짜 (연, 월)                      |
| week           | 사용자 지역을 기준으로 한 날짜 (연, 주)                      |
| time           | 사용자 지역을 기준으로 한 시간(시, 분, 초, 분할 초)          |
| range          | 범위를 선택할 수 있는 양식 제공                              |
| search         | 검색어 입력 양식                                             |
| tel            | 전화번호 입력 양식                                           |
| number         | 숫자를 조절할 수 있는 양식                                   |
| url            | URL 주소 입력 양식                                           |
| email          | 메일 주소 입력 양식                                          |

 

## Select 태그

```html
<select>
  <optgroup label = "html5">
    <option>Multimedia</option>
    <option>Device Access</option>
  </optgroup>
  <optgroup label = "css3">
    <option>Animation</option>
    <option>#D Transform</option>
  </optgroup>
</select>
```

<select>
  <optgroup label = "html5">
    <option>Multimedia</option>
    <option>Device Access</option>
  </optgroup>
  <optgroup label = "css3">
    <option>Animation</option>
    <option>#D Transform</option>
  </optgroup>
</select>



## fieldset, legend 태그

입력 양식을 설명할 때 사용한다. legend 태그는 fieldset 태그 내부에서만 사용 가능.

```html
<fieldset>
  <legend>입력 양식</legend>
  <table>
    <tr>
      <td><label for = "name">이름</label></td>
      <td><input id = "name" type = "text"></td>
    </tr>
    <tr>
      <td><label for = "mail">이메일</label></td>
      <td><input id = "mail" type = "email"></td>
    </tr>
  </table>
</fieldset>
```



## 공간 분할 태그

| 태그명 | 설명                             |
| ------ | -------------------------------- |
| div    | block 형식으로 공간을 분할한다.  |
| span   | inline 형식으로 공간을 분할한다. |

```html
<div style="background-color: red;">div1</div>
<div style="background-color: green;">div2</div>

<span style="background-color: red;">span1</span> <span style="background-color: green;">span2</span>
```

<div style="background-color: red;">div1</div>
<div style="background-color: green;">div2</div>

<span style="background-color: red;">span1</span><span style="background-color: green;">span2</span>



## 시멘틱 태그

"의미론적인" 이라는 뜻으로 의미를 가지는 태그를 말한다. div, span 태그는 아무 의미를 갖지 않는 태그인데, 이를 사용할 때 class 속성을 통해 의미를 부여하여 사용한다.

< 장점 >

- 의미있는 태그 사용으로 사람이 이해하기 쉽고, 유지보수에 유리하다.
- 검색 엔진 최적화에 도움을 준다.

| 태그명  | 설명                                            |
| ------- | ----------------------------------------------- |
| header  | 헤더. 사이트의 제목, 로고, 검색 창 등이 위치    |
| nav     | 네비게이션.                                     |
| aside   | 사이드에 위치하는 공간. 본문 외의 내용을이 위치 |
| section | 여러 중심 내용을 감싸는 공간을 의미.            |
| article | 글자가 많이 들어가는 부분을 의미                |
| footer  | 푸터. 저작권 정보, 제작자 정보 등이 위치        |

```html
<header>
  <h1> Header </h1>
</header>
<nav>
  <ul>
    <li><a href="#">Menu-1</a></li>
    <li><a href="#">Menu-2</a></li>
    <li><a href="#">Menu-3</a></li>
  </ul>
</nav>
<section>
  <article>
    <h2>Title1</h2>
    <p>article........................</p>
  </article>
  <article>
    <h2>Title2</h2>
    <p>article........................</p>
  </article>
</section>
<footer>
  <address>서울특별시 강서구</address>
</footer>
```

<header>
  <h1> Header </h1>
</header>
<nav>
  <ul>
    <li><a href="#">Menu-1</a></li>
    <li><a href="#">Menu-2</a></li>
    <li><a href="#">Menu-3</a></li>
  </ul>
</nav>
<section>
  <article>
    <h2>Title1</h2>
    <p>article........................</p>
  </article>
  <article>
    <h2>Title2</h2>
    <p>article........................</p>
  </article>
</section>
<footer>
  <address>서울특별시 강서구</address>
</footer>



## 특수 기호

| 특수 기호 | 내용       |
| --------- | ---------- |
| `&nbsp;`  | 공백 한 칸 |
| `&lt;`    | <          |
| `&gt;`    | >          |
| `&quot;`  | "          |
| `&#124;`  | \|         |
| `&#40;`   | (          |
| `&#41;`   | )          |
| `&#44;`   | ,          |
| `&#45;`   | -          |
| `amp;`    | &          |
| `&acute;` | '          |





## CSS(Cascading Style Sheet)

```html
선택자 { 스타일 속성 : 스타일 값; }
h1 {color : red;}
```

### 선언 방식에 따른 차이

- inline > internal > external
- id > class > element



## 선택자

### 1. 전체 선택자

모든 요소에 스타일 적용

```html
* {font-size : 10px;}
```



### 2. 태그 선택자

특정 태그에 스타일 적용

```html
p { font-size : 10px; }
```



### 3. 클래스 선택자 ( . )

특정 클래스에 스타일 적용

```html
.name {color:red;}
```



### 4. id 선택자 ( # )

특정 id에 스타일 적용

```html
#name {color:red;}
```



### 5. 하위 선택자

모든 하위 요소에 스타일 적용

```html
div p {color:red;}
```



### 6. 자식 선택자

자식 요소에만 스타일 적용 (하위 선택자는 자식 요소뿐만 아니라 그 밑의 자식 요소까지 모두 적용되지만, 자식 선택자는 바로 밑의 자식 요소까지만 스타일이 적용된다.)

```html
div > p {color:red;}
```





