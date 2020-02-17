/* Minimum
The previous chapter introduced the standard function Math.min that re-
turns its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum. */



function min(a, b) {
  if (a > b) {
    return a;
  } else return b;
}
console.log(min(20, 15));