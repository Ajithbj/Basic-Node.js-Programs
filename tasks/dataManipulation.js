// Task 2: Data Manipulation
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  console.log('Sum of numbers:', result);
  
  const numbers2 = [10, 20, 30];
  const result2 = sumArray(numbers2);
  console.log('Sum of numbers2:', result2);
  