import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup(){
    Promise.all([uploadPhoto(), createUser()])
      .then(([y, x]) => {
        console.log(`${y.body} ${x.firstName} ${x.lastName}`);
      })
      .catch(() => {
        console.log("Signup system offline");
      });
}
