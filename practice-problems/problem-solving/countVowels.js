function countVowels(word) {
    let count = 0;
    const value = word.toLowerCase();

    for (let i = 0; i < value.length; i++) {
        if (
            value[i] === 'a' ||
            value[i] === 'e' ||
            value[i] === 'i' ||
            value[i] === 'o' ||
            value[i] === 'u'
        ) {
            count++;
        }
    }

    return count;
}

const result = countVowels("apple");
console.log(result);
