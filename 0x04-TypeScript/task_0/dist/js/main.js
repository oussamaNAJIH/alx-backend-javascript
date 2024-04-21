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
var myTable = document.createElement('table');
var myHeader = document.createElement('tr');
myHeader.innerHTML = '<th>First Name</th><th>Location</th>';
myTable.appendChild(myHeader); // Append header to the table
studentsList.forEach(function (student) {
    var myRow = document.createElement('tr');
    myRow.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    myTable.appendChild(myRow);
});
document.body.appendChild(myTable);
//# sourceMappingURL=main.js.map