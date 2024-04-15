export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const finalStudentsList = listStudents.filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      for (const st of newGrades) {
        if (st.studentId === updatedStudent.id) {
          updatedStudent.grade = st.grade;
          return updatedStudent;
        }
      }
      updatedStudent.grade = 'N/A';
      return updatedStudent;
    });
  return finalStudentsList;
}
