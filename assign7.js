function printNumberTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        
        for (let j = 1; j <= rows - i; j++) {
            line += ' ';
        }
    
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += k % 10; 
        }
        
        console.log(line);
    }
}

// Example:
printNumberTriangle(5);
