export default function iterateThroughObject(reportWithIterator) {
  const names = [];

  for (const item of reportWithIterator) {
    names.push(item);
  }

  return names.join(' | ');
}
