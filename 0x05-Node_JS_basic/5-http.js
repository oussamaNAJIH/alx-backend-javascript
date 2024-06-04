const http = require('http');
const fs = require('fs');

const path = process.argv[2].toString();

const countStudents = (Path) => new Promise((resolve, reject) => {
  fs.readFile(Path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else if (data) {
      let output = '';
      const students = {};
      const courses = {};
      let length = 0;
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
      output += `Number of students: ${length}\n`;
      console.log();
      for (const [key, value] of Object.entries(courses)) {
        output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
      }
      resolve(output);
    }
  });
});

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    // Call countStudents and handle the Promise
    countStudents(path)
      .then((output) => {
        const outString = output.slice(0, -1);
        res.end(outString);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
