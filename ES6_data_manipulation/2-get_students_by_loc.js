export default function getStudentsByLocation(x, city){
    return x.filter(item => item['location'] == city)
}
