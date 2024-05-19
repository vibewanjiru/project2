function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
const exampleString = 'rendezvous';
console.log(countVowels(exampleString)); //Out