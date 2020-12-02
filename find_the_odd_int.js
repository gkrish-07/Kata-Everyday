//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.



function findOdd(A) {
  let counter = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[j] === A[i]) {
        counter++;
      }
    }

    if (counter % 2 != 0) {
      result = A[i];
      break;
    }
  }

  return result;
}
