export function randomArr (arr) {
  let n = Math.floor(Math.random() * arr.length + 1) - 1
  return (arr[n])
}