const fs = require('node:fs/promises');

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, { encoding: 'utf8' });
  } catch (err) {
    console.error(err);
  }

  const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');
  const students = lines.slice(1).map((line) => line.split(','));

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const firstname = student[0];
    const field = student[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  for (const field of Object.keys(fields)) {
    const list = fields[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
