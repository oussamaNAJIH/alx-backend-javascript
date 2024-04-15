export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    const studentsByCity = listStudents.filter(student => student.location === city);
    const finalStudentsList = studentsByCity.map((student) => {
        for (let st of newGrades) {
            if (st.studentId === student.id){
                student.grade = st.grade;
                return student;
            }
        }
        student.grade = 'N/A';
        return student;
    })
    return finalStudentsList;

}