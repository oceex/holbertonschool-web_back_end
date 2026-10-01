import fs from 'fs';

/**
 * Reads the CSV database and resolves with an object of arrays:
 * { CS: ['Johann', ...], SWE: ['Guillaume', ...] }
 * Rejects with the original error when the file cannot be read.
 */
async function readDatabase(path) {
  const data = await fs.promises.readFile(path, 'utf-8');

  const rows = data
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .slice(1) // header
    .map((line) => line.split(','));

  const fields = {};
  rows.forEach((row) => {
    const firstName = row[0];
    const field = row[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstName);
  });

  return fields;
}

export default readDatabase;
