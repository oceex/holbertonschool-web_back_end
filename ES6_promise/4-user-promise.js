export default function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
        resolve({
          firstName: firstName,
          lastName: lastName,
        })
    })
}

console.log(signUpUser("Bob", "Dylan"));
