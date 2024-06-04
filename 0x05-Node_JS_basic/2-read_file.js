const fs = require('fs');

function countStudents(path) {
  try {
    const students = {};
    const courses = {};
    let length = 0;
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const fields = lines[i].split(',');
        const course = fields[3];
        const firstName = fields[0];
        if (Object.prototype.hasOwnProperty.call(students, course)) {
          students[course].push(firstName);
        } else {
          students[course] = [firstName];
        }
        if (Object.prototype.hasOwnProperty.call(courses, course)) {
          courses[course] += 1;
        } else {
          courses[course] = 1;
        }
      }
    }
    console.log(`Number of students: ${length}`);
    for (const [key, value] of Object.entries(courses)) {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
