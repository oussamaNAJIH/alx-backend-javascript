export default function getStudentsByLocation(ListStudents, city) {
  const Students = ListStudents.filter((student) => student.location === city);
  return Students;
}
