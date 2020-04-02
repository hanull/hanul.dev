---
title: "[git] git-저장소마다 다른 계정 정보 사용하기"
date: 2020-03-13 16:03:48
category: git
draft: false
---

git을 설치 후 이름과 이메일을 설정해 주면 `git commit`, `git push` 할 때마다 계정 정보를 입력하지 않아도 된다.

```java
git config --global user.name "hanul"
git config --global user.email "hanul@naver.com"
```

설정 후 `git commit` 을 하면 global 로 설정된 계정 정보로 commit 이 만들어지게 된다. 하지만, 다른 계정을 사용하여 로그인 해야할 떄가 있을 것이다.

이러한 경우에는 원하는 저장소 위치에서 `--local` 옵션을 사용하면 된다.

```java
git config --local user.name "hanul22"
git config --local user.email "hanul22@naver.com"
```

설정 후에는 해당 저장소에서 local 로 설정된 계정을 사용하게 된다.

### 설정 확인하기
설정을 확인하고 싶다면, 아래와 같이 확인해 볼 수 있다.

```java
git config --list
git config --global(local) --list
```

### 설정한 계정 삭제하기
설정된 정보를 삭제하려면, 아래와 같은 방법으로 할 수 있다.

```java
git config --unset user.name
git config --unset user.email
git config --unset --global user.name
```
