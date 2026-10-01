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

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // First line is the header
    const rows = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    let total = 0;
    for (const row of rows) {
      if (row.length < 4) continue; // skip malformed lines
      const firstName = row[0];
      const field = row[row.length - 1].trim();
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
      total += 1;
    }

    const report = [`Number of students: ${total}`];
    for (const [field, names] of Object.entries(fields)) {
      report.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
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