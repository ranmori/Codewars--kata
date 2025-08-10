


function validate(n) {

  let digits = n.toString().split("").map(Number);
  let length = digits.length;
  let transformed = digits.map((x, i) => {
    if ((length % 2 === 0 && i% 2 === 0) || (length % 2 !== 0 && i % 2 !== 0)) {
      let doubled = x * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return x;

  });
  let sum = transformed.reduce((a,b) => a+ b, 0);

  return sum % 10 === 0;

}
