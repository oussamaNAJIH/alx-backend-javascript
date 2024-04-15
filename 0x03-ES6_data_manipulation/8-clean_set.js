export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  let result = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      result = result.concat(element.substring(startString.length), '-');
    }
  }
  if (result.length > 1) {
    result = result.substring(0, result.length - 1);
  }
  return result;
}
