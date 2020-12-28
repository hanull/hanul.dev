---
title: 컴파일할 때, release version 5 not supported 에러
date: 2020-12-28 16:12:56
category: intellij
draft: false
---


intellij Maven 프로젝트 컴파일시 `release version 5 not supported` 에러가 발생했다. 
해당 에러는 컴파일러 모듈 타겟, 언어 레벨이 5로 설정되어 있기 때문이다.

## 해결 방법
1. Proejct Structure -> Language Level을 java 13으로 변경
2. Preference -> Java Compiler에서 모듈 타겟을 13으로 변경
