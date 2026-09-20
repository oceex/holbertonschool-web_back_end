export default function getListStudentIds(x){
    if (!Array.isArray(x))
        return [];
    return students.map((x) => x.id);
}
