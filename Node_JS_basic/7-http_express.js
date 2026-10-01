const express = require('express');
const { promises: fs } = require('fs');

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

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let report;
  try {
    report = await studentsReport(process.argv[2]);
  } catch (err) {
    report = 'Cannot load the database';
  }
  res.type('text/plain').send(`This is the list of our students\n${report}`);
});

app.listen(1245);

module.exports = app;
