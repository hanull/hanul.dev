---
title: HahshMap 값(Value) 기준으로 정렬하기
date: 2021-06-04 22:06:74
category: java
draft: false
---

```java
HashMap<String, Integer> hm = new HashMap<>();
hm.put("apple", 2);
hm.put("banana", 1);
hm.put("melon", 5);

List<Map.Entry<String, Integer>> entries = new ArrayList<>(hm.entrySet());
Collections.sort(entries, (o1, o2) -> o2.getValue().compareTo(o1.getValue()));

for (Map.Entry<String, Integer> entry : entries) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}
```

```
melon 5
apple 2
banana 1
```