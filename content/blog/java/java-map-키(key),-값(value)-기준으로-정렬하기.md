---
title: Java Map 키(Key), 값(Value) 기준으로 정렬하기
date: 2020-09-19 15:09:44
category: java
draft: false
---


## Sort by Key
1. ArrayList

```java
    HashMap<Integer, String> hm = new HashMap<>();
    hm.put(3, "green");
    hm.put(4, "black");
    hm.put(1, "red");
    hm.put(2, "blue");
    
    ArrayList<Integer> list = new ArrayList<>(hm.keySet());
    list.sort(Integer::compareTo);
    for (Integer num : list) {
        System.out.println(num);
    }
```

```
1
2
3
4
```

2. TreeMap

```java
    TreeMap<Integer, String> tm = new TreeMap<>();
    tm.put(3, "green");
    tm.put(4, "black");
    tm.put(1, "red");
    tm.put(2, "blue");
    for (Integer num : tm.keySet()) {
        System.out.println(num);
    }
```

```
1
2
3
4
```

## Sort by Value

1. LinkedList 
`value` 기준으로 내림차순 정렬

```java
        HashMap<String, Integer> hm = new HashMap<>();
        hm.put("green", 3);
        hm.put("black", 4);
        hm.put("red", 1);
        hm.put("blue", 2);

        ArrayList<Map.Entry<String, Integer>> entries = new ArrayList<>(hm.entrySet());
        Collections.sort(entries, new Comparator<Map.Entry<String, Integer>>() {
            @Override
            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return Integer.compare(o2.getValue(), o1.getValue());
            }
        });
        Iterator<Map.Entry<String, Integer>> iterator = entries.iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Integer> next = iterator.next();
            System.out.println(next.getValue() + " " + next.getKey());
        }
```

```
4 black
3 green
2 blue
1 red
```

2. Stream

```java
        HashMap<String, Integer> hm = new HashMap<>();
        hm.put("green", 3);
        hm.put("black", 4);
        hm.put("red", 1);
        hm.put("blue", 2);


        List<Map.Entry<String, Integer>> entries =
                hm.entrySet().stream()
                .sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toList());
        Iterator<Map.Entry<String, Integer>> iterator = entries.iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Integer> next = iterator.next();
            System.out.println(next.getValue() + " " + next.getKey());
        }
```

```
1 red
2 blue
3 green
4 black
```

