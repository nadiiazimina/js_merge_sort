const merging = (left, right) => {
  const res = [];

  while (left.length && right.length) {
    if (left[o] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  return res;
};

const m = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  merging(m(left), m(right));
};

console.log(m([4, 3, 2, 4, 5, 677, 1]));
