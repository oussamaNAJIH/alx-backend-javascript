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

let myTable = document.createElement('table');
let myHeader = document.createElement('tr');
myHeader.innerHTML = '<th>First Name</th><th>Location</th>';
myTable.appendChild(myHeader); // Append header to the table

studentsList.forEach(student => {
    let myRow = document.createElement('tr');
    myRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    myTable.appendChild(myRow);
});

document.body.appendChild(myTable);
