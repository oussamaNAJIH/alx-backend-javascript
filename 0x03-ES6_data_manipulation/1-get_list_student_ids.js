export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const newArray = arr.map((obj) => obj.id);
    return newArray;
  }
  return [];
}
