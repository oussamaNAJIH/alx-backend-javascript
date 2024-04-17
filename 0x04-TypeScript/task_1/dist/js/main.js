var student1 = {
    firstName: "ahmed",
    lastName: "Sefrioui",
    age: 42,
    location: "casablanca"
};
var student2 = {
    firstName: "samir",
    lastName: "bahi",
    age: 40,
    location: "rabat"
};
var studentsList = [student1, student2];
// Get the table element from the DOM
var table = document.createElement('table');
// Create header row
var headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(headerRow);
// Create a row for each student and append to the table
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>" + student.firstName + "</td><td>" + student.location + "</td>";
    table.appendChild(row);
});
// Append the table to the document body
document.body.appendChild(table);
//# sourceMappingURL=main.js.map