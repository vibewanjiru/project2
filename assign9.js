function findDifference(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return 0;
    }

    // Initialize max and min with the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Loop through the array to find the max and min values
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Return the difference between the max and min values
    return max - min;
}

// Example usage
const arr = [56, 78, 12, 45, 67, 80];
const difference = findDifference(arr);
console.log(difference); // Output: 68
