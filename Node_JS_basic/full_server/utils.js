import fs from 'node:fs/promises';

export default async function readDatabase(file) {
  const data = await fs.readFile(file, { encoding: 'utf8' });
  const result = {};
  const lines = data
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .slice(1)
    .map((line) => line.split(','));

  lines.forEach((line) => {
    if (!result[line[3]]) {
      result[line[3]] = [];
    }
    result[line[3]].push(line[0]);
  });

  return result;
}
