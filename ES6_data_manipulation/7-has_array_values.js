export default function hasValuesFromArray(se, array){
    return array.every((item) => set.has(item));
}