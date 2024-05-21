function isPrime(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // If n is divisible by any number other than 1 and itself, it is not prime
        }
    }
    return true; // n is a prime number
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
