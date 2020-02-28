---
title: strlcat() 구현
date: 2020-02-29 02:02:88
category: c
draft: false
---

### strlcat

```c++
size_t	strlcat(char *dst, const char *src, size_t size)
```
- strlcat은 문자열 src 를 dst 의 끝에 추가해주는 함수이다.

- dst 의 마지막 위치에 src 을 size - strlen(dst) - 1 만큼 복사하고, 끝에 널문자를 삽입한다.

- 이후, `결합되는 문자열의 총 길이`를 반환한다.

- 여기서  size는 `대상 버퍼의 크기`이고 size와 dst의 크기에 따라 반환값이 달라지게 된다.

  > size가 dst의 크기보다 작을 때, `strlen(src) + size` 를 반환한다.
  > size가 dst의 크기보다 클 때, `strlen(src) + strlen(dst)`를 반환한다.


```c++
#include <string.h>

size_t	ft_strlcat(char *dst, const char *src, size_t size)
{
	size_t dst_len;
	size_t result;
	int i;
	int j;

	dst_len = strlen(dst);
	result = strlen(src);
	i = 0;
	j = dst_len;
	while ((src[i] != '\0') && i < (int)(size - dst_len - 1))
	{
		dst[j] = src[i];
		i++;
		j++;
	}
	dst[j] = '\0';
	if (size < dst_len)
		result += size;
	else
		result += dst_len;
	return (result);
}
```

> [참고](https://www.unix.com/man-page/mojave/3/strlcat/)
