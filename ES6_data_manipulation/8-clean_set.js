export default function cleanSet(set, startString) {
  const results = [];

  set.forEach((value) => {
    if (startString !== '' && value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  });

  return results.join('-');
}
