// Array of student objects
let students = [
    { name: "Rahul", marks: [80, 75, 90] },
    { name: "Anita", marks: [85, 70, 88] },
    { name: "Kiran", marks: [78, 82, 80] }
];

// Loop through each student
for (let i = 0; i < students.length; i++) {

    let total = 0;

    // Calculate total marks
    for (let j = 0; j < students[i].marks.length; j++) {
        total += students[i].marks[j];
    }

    // Calculate average
    let average = total / students[i].marks.length;

    console.log("Student Name:", students[i].name);
    console.log("Total Marks:", total);
    console.log("Average Marks:", average);
    console.log("-------------------------");
}
