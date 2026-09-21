import { uploadPhoto, createUser } from 'utils.js'

export default function handleProfileSignup(){
    try{
        Promise.all([uploadPhoto(), createUser()])
        .then(([y, x]) => {

            console.log(`${y.body} ${x.firstName} ${x.lastName}`)
        })
    }
    catch(e)
        {
            console.log("Signup system offline")
        }
}
