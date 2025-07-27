

function postfixEvaluator(string) {
  // write your magic code here
  let result = [];
  string.trim().split(" ").forEach((n) => {
    if (!isNaN(n))  result.push(+n)
    else if (n.match(/[+\-*/%]/)) {
      let b = result.pop();
      let a = result.pop();
      let op = n;
      if (op === "+") result.push(a + b);
      else if (op === "-") result.push(a - b);
      else if (op === "*") result.push(a * b);
      else if (op === "/") result.push(Math.trunc(a / b)); 
      else if (op === "%") result.push(a % b);

    }

  });

  return result[0];

}
