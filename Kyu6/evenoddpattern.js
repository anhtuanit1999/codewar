arr = [1,2,6,1,6,3,1,9,6];

const EvenOdd = (xs) => (
  xs.reduce(
    (acc,x,i) => i % 2 ? acc * x : acc + x, 0
  )
);

console.log(EvenOdd(arr));
