export default function uploadPhoto(filename) {
    return new Promise((rej) => {
        rej(new Error(`${filename} cannot be processed`))
    });
}
