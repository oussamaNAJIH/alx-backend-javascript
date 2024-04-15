export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  let result = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      result = result.concat(element.slice(startString.length), '-');
    }
  }
  if (result.length > 0) {
    result = result.slice(0, result.length - 1);
  }
  return result;
}
