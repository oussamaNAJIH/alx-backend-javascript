const fs = require('fs');
function countStudents(path) {
    try{
        const data = fs.readFileSync(path, 'utf8');
        const students = data.split('\n').slice(1);
        const NUMBER_OF_STUDENTS = students.length;
        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    }
    catch(err) {
        throw new Error('Cannot load the database');
    }
    
    
}
module.exports = countStudents;