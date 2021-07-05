---
title: ngrok란
date: 2021-07-04 01:07:05
category: devops
draft: false
---

## ngrok란?
방화벽 넘어서 외부에서 로컬에 접속 가능하게 하는 터널 프로그램이라고 할 수 있다. 
## 설치

```
brew install ngrok
```

## 사용법
로컬 서버 포트가 9090이라고 가정하면 아래 명령을 실행하면 외부에서 접근 가능하다.

```
ngrok http 9090
```

```
ngrok by @inconshreveable                                                                                             (Ctrl+C to quit)

Session Status                online
Session Expires               11 minutes
Version                       2.3.40
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1fd78760df34.ngrok.io -> http://localhost:9090
Forwarding                    https://1fd78760df34.ngrok.io -> http://localhost:9090

Connections                   ttl     opn     rt1     rt5     p50     p90
                              3       0       0.00    0.00    5.20    5.22

HTTP Requests
-------------
```

이렇게 포워딩 URL을 사용하게 되면 외부에서도 로컬 개발 환경에 접근이 가능해진다. 그런데 Session Expires 의 시간이 만료가 되면 다시 ngrok을 실행해줘야 한다. ((재실행 시 포워딩 URL이 변경 됨)


## 참고
- https://blog.outsider.ne.kr/1159