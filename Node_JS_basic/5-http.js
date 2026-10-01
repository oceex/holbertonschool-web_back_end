const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Reads the CSV database asynchronously and resolves with the report lines.
 * Empty lines are ignored (they are not valid students).
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const rows = data
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1) // header
      .map((line) => line.split(','))
      .filter((row) => row.length >= 4);

    const fields = {};
    rows.forEach((row) => {
      const field = row[row.length - 1].trim();
      fields[field] = (fields[field] || []).concat(row[0]);
    });

    const report = [`Number of students: ${rows.length}`];
    Object.keys(fields).forEach((field) => {
      const names = fields[field];
      report.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
    resolve(report);
  });
});

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    const header = 'This is the list of our students';
    countStudents(DB_FILE)
      .then((report) => {
        res.end(`${header}\n${report.join('\n')}`);
      })
      .catch((err) => {
        res.end(`${header}\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(PORT, HOST);

module.exports = app;
