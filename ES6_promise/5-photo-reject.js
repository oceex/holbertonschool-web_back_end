export default function uploadPhoto(filename) {
    return new Promise((re, reject) => {
        reject(new Error(`${filename} cannot be processed`))
    });
}
