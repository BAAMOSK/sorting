function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// function bubbleSort(array) {
//   let swaps = 0;
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] > array[i + 1]) {
//       swap(array, i, i + 1);
//       swaps++;
//     }
//   }
//   if(swaps > 0) {
//     return bubbleSort(array);
//   }
//   return array;
// }
//
// // console.log(bubbleSort(arr));
// function mergeSort(array) {
//   if(array.length <= 1) {
//     return array;
//   }
//   const middle = Math.floor(array.length / 2);
//   let left = array.slice(0,middle);
//   let right = array.slice(middle);
//
//   left = mergeSort(left);
//   right = mergeSort(right);
//   temp = mergeSort(left);
//
//   return merge(left, right, array);
// }
//
// function merge(left, right, array) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let resultIndex = 0;
//   //This compares from each side
//   while(leftIndex < left.length && rightIndex < right.length) {
//     if(left[leftIndex] < right[rightIndex]) {
//       array[resultIndex++] = left[leftIndex++];
//     } else {
//       array[resultIndex++] = right[rightIndex++];
//     }
//   }
//   //Puts the values into the sorted array
//   for(let i = leftIndex; i < left.length; i++) {
//     array[resultIndex++] = left[i];
//   }
//   for(let i = rightIndex; i < right.length; i++) {
//     array[resultIndex++] = right[i];
//   }
//   return array;
// }
//                [4,8,9,3] [1,5,6]
//                [3, 4, 8, 9] [1, 5, 6]
//                1,3,4,5,6,8,9
//  resultIndex = [1, 4, 5, 8, 6, 9] ---- [3]
//  leftIndex = 0;
//  rightIndex = 3;
//  resultIndex = 3;
// [xxx4]


// mergeSort(arr);

let arr = [4,8,9,3,1,5,6];
// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// }
function quickSort(array, start=0, end=array.length) {
  //out of bounds of array
  start=start;
  end=end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle+1, end);

  return array;
}

function partition(array, start, end) {
//using end of array as pivot which is the same as array.length
  let j = start;
  const pivot = array[end - 1];

  for(let i=start; i < end - 1; i++) {
    if(array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

console.log(quickSort(arr));
