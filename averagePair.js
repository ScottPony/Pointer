// BigO = O(n^2)
function averagePair(sortedArr, avg) {
  let result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if ((sortedArr[i] + sortedArr[j]) / 2 != avg) {
        continue;
      }

      result.push([sortedArr[i], sortedArr[j]]);
    }
  }

  console.log(result);
}

// BigO = O(n)
function averagePair_Pointer(sortedArr, avg) {
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;
  let result = [];

  while (rightPointer > leftPointer) {
    if ((sortedArr[leftPointer] + sortedArr[rightPointer]) / 2 > avg) {
      rightPointer--;
    } else if ((sortedArr[leftPointer] + sortedArr[rightPointer]) / 2 < avg) {
      leftPointer++;
    } else {
      // (sortedArr[leftPointer] + sortedArr[rightPointer]) / 2 === avg
      result.push([sortedArr[leftPointer], sortedArr[rightPointer]]);
      rightPointer--;
      leftPointer++;
    }
  }

  console.log(result);
}

averagePair_Pointer([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
