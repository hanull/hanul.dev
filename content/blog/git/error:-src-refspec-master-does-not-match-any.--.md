---
title: error: src refspec master does not match any.  
date: 2020-11-08 16:11:29
category: git
draft: false
---


깃헙에서 생성한 프로젝트를 클론하고 수정한 뒤 푸시를 하는 과정에서 이러한 에러를 만났다.


```
error: src refspec master does not match any.  
error: failed to push some refs to 'https://github.com/xxxxx/xxxxx.git'
```


이유를 보니 `master` 브랜치가 존재하지 않기 때문이었고, 마스터 브랜치를 생성한 뒤 master 브랜치 이동 후 푸시를 했다.

```
git checkout -b "master"
git push origin master
```

그런데 왜 리포지토리 생성할 때 master 브랜치가 생성되지 않았지?? 라는 생각이 들었고 찾아보니, 기본으로 생성되는 브랜치명이 `master`에서 `main`으로 변경..!

`Black Lives Matter` 운동에 발맞춰 주종(주인과 노예)관계를 뜻하는 `master`, `slave`를 다른 단어로 대체하기 위해서 변경 되었다고 한다.