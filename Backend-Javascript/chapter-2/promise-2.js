// function isPasswordCorrect(password) {
//   return new Promise ((resolve, reject) => {
//     console.log('Password', password)
//     if (password != 123456)
//       return reject("Wrong Password!");
      
//     resolve("Password is Correct!");
//   })
// }

// isPasswordCorrect('123456')
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

// isPasswordCorrect('123457')
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

const checkName = (name, password) => {
  return new Promise((resolve, reject) => {
    console.log("Nama", name)
    if(name != 'dava' || password != '1234')
      return reject("Wrong username or password!")
    return resolve('Account is Activated!')
  })
}

checkName('dava', '12345').then(resolve => console.log(resolve)).catch(reject => console.log(reject))
// checkName('test').then(resolve => console.log(resolve)).catch(reject => console.log(reject))