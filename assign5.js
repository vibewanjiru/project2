function drawTriangle() {
    let result = '';
    // Loop to create each line of the triangle
    for (let i = 1; i <= 10; i++) {
        // Create the current line
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        result += '\n'; // Add a newline character at the end of each line
    }
    console.log(result);
}

// Call the function to draw the triangle
drawTriangle();
