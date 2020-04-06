---
title: memcopy vs memmove
date: 2020-02-28 15:02:11
category: c
draft: false
---

### memcpy vs memmove

- 먼저, memcpy 와 memmove 모두 버퍼의 내용을 특정 버퍼로 복사할 때 사용한다. 하지만 약간의 차이가 존재한다.

  `memcpy`

  ```c++
  int main()
  {
     char csrc[100] = "Geeksfor";
     memcpy(csrc+5, csrc, strlen(csrc)+1);
     printf("%s", csrc);
     return 0;
  }
  ```

  ```
  GeeksGeeksGeek
  ```

  - overlap 이 발생하는 경우, 데이터를 손실시키는 일이 발생한다.

  `memmove`

  ```c++
  int main()
  {
     char csrc[100] = "Geeksfor";
     memmove(csrc+5, csrc, strlen(csrc)+1);
     printf("%s", csrc);
     return 0;
  }
  ```

  ```
  GeeksGeeksfor
  ```

  - 이동할 데이터를 임시 버퍼에 옮긴 후에 대상 버퍼로 이동하여 옮길 데이터가 있는 버퍼와 대상 데이터 버퍼가 근접하더라도 중첩 현상이 발생하지 않는다. 하지만, 이런 방법으로 사용할 경우, 임시 버퍼를 사용해야 하기 때문에 두 배의 시간이 걸리게 된다. 즉, 비효율적인 알고리즘이 된다.
  - 따라서, src 와 dst 두 버퍼의 주소를 겹치는지 비교한 뒤, 복사하는 방법을 사용하여 임시 버퍼 사용을 피하는 것이 좋다.

  - 현재는 memcpy의 이러한 단점을 보완하여 overlap 이 발생하지 않고, memmove 와 동일한 결과를 준다고 한다.

> [참고1](https://m.blog.naver.com/PostView.nhn?blogId=sharonichoya&logNo=220510332768&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
>
> [참고2](https://42born2code.slack.com/files/UU8UE337	Y/FUH14APQU/ft_memmove3.png)
>
> [참고3](https://www.geeksforgeeks.org/write-memcpy/)
