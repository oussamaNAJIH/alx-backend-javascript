const { readDatabase } = require('../utils');

const path = process.argv[2]; // Ensure this is the correct path to your database file

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((students) => {
        let result = 'This is the list of our students\n';
        const courses = Object.keys(students).sort();

        for (const course of courses) {
          const studentList = students[course].join(', ');
          result += `Number of students in ${course}: ${students[course].length}. List: ${studentList}\n`;
        }

        response.status(200).send(result.trim());
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((students) => {
        if (!students[major]) {
          response.status(200).send('List: ');
          return;
        }

        const studentList = students[major].join(', ');
        const result = `List: ${studentList}`;

        response.status(200).send(result);
      })
      .catch((error) => {
        console.error(error); // Log the error for debugging
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
