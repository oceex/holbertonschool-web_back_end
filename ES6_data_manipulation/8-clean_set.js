export default function cleanSet(set, startString) {
  const results = [];

  if (!startString) {
    return '';
  }
  else if (typeof startString !== 'Sting')
      return '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  });

  return results.join('-');
}
