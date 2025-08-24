

// 1. Prime check using trial division
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}

// 2. Sum of squares of digits
function sumSquareDigits(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

// 3. Check if a number eventually reaches 1
// Add memoization to speed up repeated checks
const memo = {};
function endsInOne(n) {
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    if (n in memo) {
      return memo[n];
    }
    seen.add(n);
    n = sumSquareDigits(n);
  }

  const result = (n === 1);
  for (const x of seen) {
    memo[x] = result;
  }
  return result;
}

// 4. Main loop to collect primes and count the "happy" ones
function countHappyPrimes(start, end) {
  let count = 0;
  for (let i = start; i < end; i++) { // use < end per problem statement
    if (isPrime(i) && endsInOne(i)) {
      count++;
    }
  }
  return count;
}

// Example: count primes in [2, 25)
console.log(countHappyPrimes(2, 25)); // should output the count for that range

// Example: full range up to 50,000
// console.log(countHappyPrimes(2, 50000));
