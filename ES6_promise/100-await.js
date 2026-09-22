import {uploadPhoto, createUser} from './utils.js'

export default async function asyncUploadUser(){
    return Promise.all([uploadPhoto, createUser])
        .then(([photo, user]) =>{
        return {
          photo: photo,
          user: user,
        }
    }).catch((e) => {
        return {
          photo: null,
          user: null,
        }
    });
}
