export default function getListStudents() {
  const myArray = [];
  const getStudent = (id, firstName, location) => ({ id, firstName, location });
  myArray.push(getStudent(1, 'Guillaume', 'San Francisco'));
  myArray.push(getStudent(2, 'James', 'Columbia'));
  myArray.push(getStudent(3, 'Serena', 'San Francisco'));
  return myArray;
}
