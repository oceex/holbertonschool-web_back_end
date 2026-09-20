export default function getStudentIdsSum(x){
    return x.reduce((ac, val) => ac + val.id, 0, );
}
