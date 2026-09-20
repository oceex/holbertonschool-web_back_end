export default function getListStudentIds(x) {
  if (!Array.isArray(x))
    return [];

  return x.map((student) => student.id);
}