---
title: Git Repository 이동하기
date: 2019-12-29 16:12:54
category: git
draft: false
---

기존에 알고리즘 레파지토리가 두 개가 존재했고, 이를 하나로 통합, 관리하고 싶었다. 간단하게 기존 데이터를 새 레파지토리에 
복사해서 푸쉬하면 끝이다. 하지만, 그 동안의 커밋 로그까지 옮기고 싶어서 방법을 찾아보았고 `git clone --mirror` 를 알게 되었다. `--mirror` 기존의 레파지토리의 tracking branches, notes 등 모든 것이 그대로 복제된다. 말 그대로 기존의 레파지토리와 똑같이 변경된다.

### 기존의 레파지토리 복사
```git clone --mirror http://github.com/hanull/test1.git ```

### 기존의 레파지토리로 이동
```cd test1.git```

### 새 레파지토리 url 설정
```git remote set-url --push origin http://github.com/hanull/newRepository.git```

### 새 레파지토리에 push 하기
```git push --mirror```

### 정상적으로 복사되었는지 확인
```git remote -v```


### 주의할 점
복제라는 점을 기억하자. 기존의 레파지토리의 모든 것을 똑같이 카피하여 새로운 레파지토리에 복제하기 때문에 새로운 레파지토리에 데이터가 존재한다면 없어지고 복제된 데이터만 존재하게 될 것이다.
