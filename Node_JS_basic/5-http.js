const http = require('http');
const fs = require('fs').promises;

async function studentsReport(path) {
  const lines = (await fs.readFile(path, 'utf-8')).split(/\r?\n/).filter(Boolean).slice(1);
  const fields = {};
  lines.forEach((line) => {
    const [firstName, , , field] = line.split(',');
    fields[field] = (fields[field] || []).concat(firstName);
  });
  const perField = Object.entries(fields).map(
    ([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
  );
  return [`Number of students: ${lines.length}`, ...perField].join('\n');
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let report;
    try {
      report = await studentsReport(process.argv[2]);
    } catch (err) {
      report = 'Cannot load the database';
    }
    res.end(`This is the list of our students\n${report}`);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
