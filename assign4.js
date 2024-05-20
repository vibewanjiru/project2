function isPalindrome(str) {
    // Remove any non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("dad")); // Output: true
console.log(isPalindrome("hello")); // Output: false
