import {uploadPhoto, createUser} from './utils.js'

export default async function asyncUploadUser(){
    return Promise.all([uploadPhoto, createUser]).then((res) =>{
        return {
          photo: res[0],
          user: res[1],
        }
    }).catch((e) => {
        return {
          photo: null,
          user: null,
        }
    });
}
