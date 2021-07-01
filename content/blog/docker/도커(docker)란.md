---
title: 도커(Docker)란
date: 2021-07-02 00:07:73
category: docker
draft: false
---

## 도커란?

도커는 컨테이너 기반의 오픈소스 가상화 플랫폼이다. 컨테이너란 프로그램(소프트웨어)을 담는 격리된 공간을 의미한다. 이 각각의 컨테이너에는 ubuntu, centos, java, python, mysql 등이 담기게 된다. 그리고 각각의 컨테이너는 격리된 공간이기 때문에 서로간에 영향을 끼치지 않는다.


## 도커 등장 배경

도커 사용 전에는 웹서버를 띄우기 위해서는 물리적인 서버 장비가 필요했고, 이에는 많은 비용이 필요했다. 

이후 등장한게 클라우드 환경이고 이를 통해서 이전의 문제점을 해결할 수 있었다.

하지만 새로운 문제가 발생했다. 한 덩어리의 거대한 서비스를 잘게 쪼개서 여러개의 서비스로 운영하는 환경이 되면서 각각의 서비스를 띄우기 위한 서버를 구축해야만 했다. 이때 각각의 서버에 라이브러리, 웹서버 등을 매번 설치해야 했고, 초기 설정을 해줘야 했다. 

이때 Immutable Infrastructure 패러다임이 등장했다. Immutable Infrastructure는 어떤 서비스를 구축하는 기반이 되는 것들을 변경하지 않는 패러다임을 말하고, 이 패러다임을 구현한게 도커이다.

### 가상 머신하고는 다른거야?

가상 머신 또한 여러 운영체제를 설치하고 여러 라이브러리 등을 설치하여 사용할 수 있다. 하지만 가상머신은 운영체제 위에 하드웨어를 에뮬레이션하고 그 위에 운영체제를 올리고 프로세스를 실행하는 반면에, 도커 컨테이너는 하드웨어 에뮬레이션 없이 리눅스 커널을 공유해서 바로 프로세스를 실행한다.


## 컨테이너 실행하기 (run)

``` 
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```


| 옵션  | 설명                                                   |
| :---- | :----------------------------------------------------- |
| -d    | detached mode 흔히 말하는 백그라운드 모드              |
| -p    | 호스트와 컨테이너의 포트를 연결 (포워딩)               |
| -v    | 호스트와 컨테이너의 디렉토리를 연결 (마운트)           |
| -e    | 컨테이너 내에서 사용할 환경변수 설정                   |
| –name | 컨테이너 이름 설정                                     |
| –rm   | 프로세스 종료시 컨테이너 자동 제거                     |
| -it   | -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션 |
| –link | 컨테이너 연결 [컨테이너명:별칭]                        |


## 컨테이너 목록 확인하기 (ps)

```
docker ps
```

## 컨테이너 중지하기 (stop)

```
docker stop [OPTIONS] CONTAINER CONTAINER2...
```


## 컨테이너 제거하기 (rm)

```
docker rm [OPTIONS] CONTAINER [CONTAINER...]

docker rm -v $(docker ps -a -q -f status=exited)	// 중지된 컨테이너 모두 삭제하기
```


## 이미지 목록 확인하기 (images)

```
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

## 이미지 다운로드하기 (pull)

`run`명령어를 입력하면 이미지가 없을 때 자동으로 다운받는다.   `pull`은 최신 버전으로 다시 다운 받는다. 같은 태그지만 이미지가 업데이트 된 경우는 `pull`명령어를 통해 새로 다운받을 수 있다.

```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```


## 이미지 삭제하기 (rmi)

컨테이너가 실행중인 이미지는 삭제되지 않는다.

```
docker rmi [OPTIONS] IMAGE [IMAGE...]
```


## 컨테이너 로그 보기 (logs)

컨테이너가 정상 작동하는지 로그를 통해 확인한다.

```
docker logs [OPTIONS] CONTAINER
```


## 컨테이너 명령어 실행하기 (exec)

컨테이너의 파일을 실행한다. `run` 명령어와 유사하지만  차이는 `run`은 새로 컨테이너를 만들어서 실행하고,  `exec`는 실행중인 컨테이너에 명령어를 내리는 것이다.

```
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```


### 참고

- https://subicura.com/2017/01/19/docker-guide-for-beginners-2.html