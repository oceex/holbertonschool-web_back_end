import {uploadPhoto, createUser} from './utils.js'

export default async function asyncUploadUser(){
    try{
        const [photo, user] = await Promise.all([
            uploadPhoto(), createUser()
        ])
        return {
            photo: photo,
            user: user,
        }
    }
    catch (e){
        return {
            photo: null,
            user: null,
        }
    }
}
