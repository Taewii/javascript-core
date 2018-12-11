function euclid_gcd(a, b) {
  while (a !== 0) {
    q = Math.floor(b / a);
    r = b % a;
    b = a;
    a = r;
  }
  return b;
}

console.log(euclid_gcd(252, 105));