const checkPassword = (password) => {
  return new Promise((resolve, reject) => {
    if (password == '1234'){
      return resolve('oke')
    }
    return reject('wrong pass')
  })
}

const check = async () => {
  try {
    const a = await checkPassword('1234')
    console.log(a)
  }catch (err) {
    console.log(err)
  }
}

check()