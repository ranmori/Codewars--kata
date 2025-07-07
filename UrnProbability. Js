


function marbleProbability(urn1, urn2, color) {
  // Expand urn object into array of marbles
  function expandUrn(urn) {
    return Object.entries(urn).flatMap(([c, count]) => Array(count).fill(c));
  }

  // Get all 2-combinations from an array
  function getTwoCombos(arr) {
    const combos = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        combos.push([arr[i], arr[j]]);
      }
    }
    return combos;
  }

  // Get a frequency key for a multiset (object representation)
  function getFreqKey(combo) {
    const map = {};
    for (const c of combo) {
      map[c] = (map[c] || 0) + 1;
    }
    return JSON.stringify(map); // faster and avoids order sorting
  }

  // GCD for BigInt
  function gcd(a, b) {
    return b === 0n ? a : gcd(b, a % b);
  }

  const arr1 = expandUrn(urn1);
  const arr2 = expandUrn(urn2);
  const combos1 = getTwoCombos(arr1);
  const combos2 = getTwoCombos(arr2);

  const urn3Map = new Map(); // urn3ConfigKey -> count

  for (const c1 of combos1) {
    for (const c2 of combos2) {
      const full = [...c1, ...c2];
      const key = getFreqKey(full);
      urn3Map.set(key, (urn3Map.get(key) || 0n) + 1n);
    }
  }

  const pairIndices = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [1, 3],
    [2, 3]
  ];

  let both = 0n;
  let atLeastOne = 0n;

  for (const [key, weight] of urn3Map.entries()) {
    const freq = JSON.parse(key);
    const urn3 = [];

    for (const color in freq) {
      for (let i = 0; i < freq[color]; i++) {
        urn3.push(color);
      }
    }

    for (const [i, j] of pairIndices) {
      const a = urn3[i];
      const b = urn3[j];

      if (a === color || b === color) {
        atLeastOne += weight;
        if (a === color && b === color) {
          both += weight;
        }
      }
    }
  }

  if (atLeastOne === 0n) return [0n, 1n]; // No valid outcome

  const divisor = gcd(both, atLeastOne);
  return [both / divisor, atLeastOne / divisor];
}
