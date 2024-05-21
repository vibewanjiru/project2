function isPalindrome(str) {
    
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Not a palindrome
        }
        
        left++;
        right--;
    }
    return true; // The string is a palindrome
}

// Example:
console.log(isPalindrome("dad")); 
console.log(isPalindrome("hello")); 
