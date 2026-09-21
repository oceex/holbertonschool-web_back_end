import uploadPhoto from './utils.js'
import createUser from './utils.js'

export default function handleProfileSignup(){
    try{
    const z = Promise.all([uploadPhoto(), createUser()])
        .then(([y, x]) => {
            console.log(y.body + " " + x.firstName + ' ' + x.lastName)
        })
    }
    catch(e)
        {
            console.log("Signup system offline")
        }
}
