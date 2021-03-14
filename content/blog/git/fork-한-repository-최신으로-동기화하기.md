---
title: Fork 한 Repository 최신으로 동기화하기
date: 2021-03-14 16:03:46
category: git
draft: false
---


1. upstream 등록
보통 원본 소스코드가 있는 곳의 위치를 upstream 이라고 명명한다. 이 이름으로 원본소스의 위치를 등록해야한다.

```
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

// 원본 소스 위치 잘 등록 되었느지 확인
git remote -v
```

```
origin  https://github.com/YOUR_USERNAME/YOUR_FORK_REPO.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_FORK_REPO.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

2. 동기화
git 의 fetch 명령어를 통해 upstream repository 로부터 최신 데이터를 동기화한다.

```
git fetch upstream
```

3. merge, push
내려받은 소스코드를 실제 내 repository 에 merge 시켜준 뒤, push를 하여 적용시킨다.

```
git merge upstream/master

git push origin master
```