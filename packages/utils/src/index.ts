export function multiply(...numbers: number[]): number {
  return numbers.reduce((a, b) => a * b, 1);
}
