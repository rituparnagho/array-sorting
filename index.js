//I have used here merge sort for sorting my array.Merge sort uses the divide and conquer technique.The time complexity of the Merge Sort algorithm is O(n log n) in the average, best, and worst cases.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  console.log("mergedArray", mergedArray);

  return mergedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const arr = [7, 5, 9, 2, 6, 1, 3];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
