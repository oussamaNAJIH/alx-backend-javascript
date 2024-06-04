const fs = require('fs');

function countStudents(path) {
  try {
    // find data
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const NUMBER_OF_STUDENTS = lines.length - 1;

    const cs = { num: 0, students: [] };
    const SWE = { num: 0, students: [] };

    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      const name = fields[0];
      const course = fields[3];

      if (course === 'CS') {
        cs.num += 1;
        cs.students.push(name);
      } else if (course === 'SWE') {
        SWE.num += 1;
        SWE.students.push(name);
      }
    }
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    console.log(`Number of students in CS: ${cs.num}. List: ${cs.students.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.num}. List: ${SWE.students.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
