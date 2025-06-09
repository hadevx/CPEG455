/** Factorial (tiny inputs; for bigger N use an iterative version). */
export function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

/** Erlang-B blocking probability P(B). */
export function erlangB(A: number, N: number): number {
  const num = Math.pow(A, N) / factorial(N);
  let den = 0;
  for (let x = 0; x <= N; x++) den += Math.pow(A, x) / factorial(x);
  return num / den;
}

/** Carried traffic = A × (1 − P(B)). */
export function carriedTraffic(A: number, PB: number): number {
  return A * (1 - PB);
}

export function efficiency(Ac: number, N: number): number {
  return Ac / N;
}

export function trafficIntensity(lambda: number, h: number): number {
  return lambda * h;
}
