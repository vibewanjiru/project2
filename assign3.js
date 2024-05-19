function calculateStudentAverages(students) {
    // Calculate average marks for each student and sort them in descending order
    students
        .map(student => ({
            name: student.name,
            average: student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length
        }))
        .sort((a, b) => b.average - a.average)
        .forEach(student => console.log(`${student.name}: ${student.average.toFixed(1)}`));
}

// Example usage
const arrayOfStudents = [
    { name: "Stephen", marks: [45, 78, 90, 32, 67] },
    { name: "Maryanne", marks: [89, 78, 10, 67, 47] },
    { name: "Kelvin", marks: [55, 88, 94, 52, 37] },
    { name: "Claire", marks: [44, 68, 88, 62, 77] }
];

calculateStudentAverages(arrayOfStudents);
