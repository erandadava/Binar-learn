function getUser(username) {
  const array = ['dava', 'laras', 'puspa']
  return new Promise(function (resolve, reject) {
      // Do the usual XHR stuff
     for (let i = 0; i < array.length; i++) {
        if (username == array[i]) {
          resolve('Username di temukan')
          break
        }
     }
     reject('Tidak ada username di database')
  });
}

getUser("dava")
      .then(res => {
          console.log("Success");
          console.log(res);
      })
      .catch(err => {
        console.log("Failed");
        console.log(err);
      })
      