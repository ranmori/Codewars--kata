


// Calculates the probability that both marbles drawn from all possible urn combinations are of a specific color,
// given two urns each containing marbles of various colors. Returns the reduced fraction [numerator, denominator].
function marbleProbability(urn1, urn2, color) {
  // Helper: Convert urn object {color: count, ...} into an array of marbles (e.g., ['red', 'red', 'blue'])
  function expandUrn(urn) {
    return Object.entries(urn).flatMap(([c, count]) => Array(count).fill(c));
  }

  // Helper: Get all possible 2-combinations from an array (order doesn't matter)
  function getTwoCombos(arr) {
    const combos = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        combos.push([arr[i], arr[j]]);
      }
    }
    return combos;
  }

  // Helper: Create a canonical key for a multiset (marble combo) using JSON (order-independent)
  function getFreqKey(combo) {
    const map = {};
    for (const c of combo) {
      map[c] = (map[c] || 0) + 1;
    }
    return JSON.stringify(map);
  }

  // Helper: Compute GCD of two BigInts (for fraction reduction)
  function gcd(a, b) {
    return b === 0n ? a : gcd(b, a % b);
  }

  // Expand each urn into arrays of marbles
  const arr1 = expandUrn(urn1);
  const arr2 = expandUrn(urn2);

  // Get all possible ways to pick 2 marbles from each urn
  const combos1 = getTwoCombos(arr1);
  const combos2 = getTwoCombos(arr2);

  // Map to count all possible combined urn3 configurations (by their frequency map as key)
  const urn3Map = new Map(); // urn3ConfigKey -> count

  // For every combination of two marbles from urn1 and urn2, create a configuration of urn3 (4 marbles) and count occurrences
  for (const c1 of combos1) {
    for (const c2 of combos2) {
      const full = [...c1, ...c2];
      const key = getFreqKey(full);
      urn3Map.set(key, (urn3Map.get(key) || 0n) + 1n);
    }
  }

  // Indices for all pairs of marbles that can be drawn from urn3 (4 marbles, so 6 unique pairs)
  const pairIndices = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [1, 3],
    [2, 3]
  ];

  let both = 0n;         // Number of outcomes where both marbles are of the target color
  let atLeastOne = 0n;   // Number of outcomes where at least one marble is of the target color

  // For every urn3 configuration, count how many pairs yield at least one (or both) marbles of the desired color
  for (const [key, weight] of urn3Map.entries()) {
    const freq = JSON.parse(key);
    const urn3 = [];

    // Reconstruct the marble array from the frequency map
    for (const color in freq) {
      for (let i = 0; i < freq[color]; i++) {
        urn3.push(color);
      }
    }

    // Examine every pair of marbles that could be drawn from urn3
    for (const [i, j] of pairIndices) {
      const a = urn3[i];
      const b = urn3[j];

      // If at least one marble matches the target color, increment atLeastOne
      if (a === color || b === color) {
        atLeastOne += weight;
        // If both marbles match the target color, increment both
        if (a === color && b === color) {
          both += weight;
        }
      }
    }
  }

  // If there are no pairs with at least one marble of the desired color, return probability 0/1
  if (atLeastOne === 0n) return [0n, 1n];

  // Reduce the fraction to simplest form
  const divisor = gcd(both, atLeastOne);
  return [both / divisor, atLeastOne / divisor];
}
