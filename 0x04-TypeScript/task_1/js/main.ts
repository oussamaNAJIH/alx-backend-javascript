interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "ahmed",
    lastName: "Sefrioui",
    age: 42,
    location: "casablanca"
};

let student2: Student = {
    firstName: "samir",
    lastName: "bahi",
    age: 40,
    location: "rabat"
};

let studentsList: Student[] = [student1, student2];

// Get the table element from the DOM
const table = document.createElement('table');

// Create header row
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(headerRow);

// Create a row for each student and append to the table
studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
