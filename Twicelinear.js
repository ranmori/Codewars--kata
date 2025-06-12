


function dblLinear(n) {

    // your codee
  let u= [1];
  let i2 = 0, i3 = 0;
  while (u.length <= n) {
    let next2 = 2 * u[i2] + 1;
    let next3 = 3 * u[i3] + 1;
    let next = Math.min(next2, next3);
    u.push(next);
    if (next === next2) i2++;
    if (next === next3) i3++;
    if (u[u.length - 1] === u[u.length - 2]) {
      u.pop(); 

    }

  }
  return u[n];
}
