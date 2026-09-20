export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });
}
