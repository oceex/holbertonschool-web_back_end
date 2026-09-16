export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
