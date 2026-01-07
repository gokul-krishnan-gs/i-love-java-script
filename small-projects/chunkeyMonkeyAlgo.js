function chunkArrayInGroups(array, number) {
  let chunk = [];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);

    if (chunk.length === number) {
      result.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}

let val = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(val);
