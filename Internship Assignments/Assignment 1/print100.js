//   1]. Print number 1 to 100 without using any loop.

let number = 100;

function p100(num) {
  if (num > 0) {
    p100(num - 1);
    console.log(num);
  } else {
    return;
  }
}

p100(number);
