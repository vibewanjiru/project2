function flattenArray(arr) {
    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        // Inner loop to iterate through each element of the inner array
        for (let j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }

    return flattenedArray;
}

// Example:
let arr = [[56, 78, 90, 34], [5, "Dan", 90], ["John", "Apple", 88]];
let result = flattenArray(arr);
console.log(result); 
