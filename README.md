# insertion-sort

## Instalation
After you clone this repo you need to move inside ```insertion-sort``` directory and run command

``` npm install```

> To run ```npm install``` you must have installed **node.js**

## Description

### Example input :
```typescript
const testArray: number = [2, 5, -12, 91, 5];
insertionSort(testArray, SortDirection.DESC);
```
### Output of example input :
```typescript
[-12, 2, 5, 5, 91]
```

**insertionSort** method takes two parametrs:

 - **elementsList** -> it is the list which you want to sort
 - **direction** -> it is optional parameter which you can set as ```ASC``` or ```DESC``` (ASC is default option)

 > ASC (Ascending), DESC Descending)

## How it works
On this graphic you can see how **insertion-sort** algortihm works :
<p align="center">
  <img src="https://i.stack.imgur.com/hIlN4.png?raw=true" alt="InsertionSort"/>
</p>
