export default function getStudentIdsSum(ListStudents) {
  const sum = ListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}
