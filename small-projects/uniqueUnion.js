function uniteUnique() {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let value of arguments[i]) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}
