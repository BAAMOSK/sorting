function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }
  if(swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

// console.log(bubbleSort(arr));
function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);

  left = mergeSort(left);
  right = mergeSort(right);
  temp = mergeSort(left);

  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resultIndex = 0;
  //This compares from each side
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[resultIndex++] = left[leftIndex++];
    } else {
      array[resultIndex++] = right[rightIndex++];
    }
  }
  //Puts the values into the sorted array
  for(let i = leftIndex; i < left.length; i++) {
    array[resultIndex++] = left[i];
  }
  for(let i = rightIndex; i < right.length; i++) {
    array[resultIndex++] = right[i];
  }
  return array;
}
//                [4,8,9,3] [1,5,6]
//                [3, 4, 8, 9] [1, 5, 6]
//                1,3,4,5,6,8,9
//  resultIndex = [1, 4, 5, 8, 6, 9] ---- [3]
//  leftIndex = 0;
//  rightIndex = 3;
//  resultIndex = 3;
// [xxx4]

let arr = [4,8,9,3,1,5,6];
mergeSort(arr);