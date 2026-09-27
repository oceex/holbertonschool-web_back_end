const fs = require('node:fs/promises');

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, { encoding: 'utf8' });
  } catch (err) {
    console.error(err);
    return;
  }

  const lines = data
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const header = lines[0].split(',').map((h) => h.trim());
  const firstnameIdx = header.indexOf('firstname');
  const fieldIdx = header.indexOf('field');

  if (firstnameIdx === -1 || fieldIdx === -1) {
    console.error('Expected "firstname" and "field" columns in header');
    return;
  }

  const students = lines.slice(1).map((line) => line.split(',').map((v) => v.trim()));

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const firstname = student[firstnameIdx];
    const field = student[fieldIdx];
    if (!field) continue;

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  for (const field of Object.keys(fields)) {
    const list = fields[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }

  return fields;
}

module.exports = countStudents;
