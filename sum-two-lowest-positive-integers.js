function sumTwoSmallestNumbers(numbers) {  
  //Code here
  //   sort the numbers in ascending order
  numbers.sort(function(a, b){return a - b});
  //   add the first two indices together
  return numbers[0] + numbers[1];
}