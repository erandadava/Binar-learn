// ketentuan : menggunakan promise dan async await
// buat array job misal seperti 
// [{job:'Backend Engineer','sallary':500},{job:'Frontend Engineer','sallary':500}]
// di dalam function promise harus mengembalikan nilai array yang sama
// nama function promise allJob(), 
// dan membuat satu fungsi job() yg menggunakan async await, di fungsi job harus membuat variable array myJob dan di variable array myJob isi nya harus job nya tanpa menggunakan sallary

let array = [
  {
    job:'Backend Engineer',
    salary:500
  },
  {
    job:'Frontend Engineer',
    salary:500
  },
  {
    job:'Software Engineer',
    salary:500
  }
]

function allJob() {
  return new Promise(function (resolve, reject) {
    if (array.length > 0 ) {
      resolve(array)
    }
    reject({message:'No Data',response:null})
  });
}

const job = async () => {
  try{
    var myJob = []
    var allData = await allJob()
    for (var i = 0; i < allData.length; i++){
      myJob.push(allData[i].job)
    }
    console.log(allData)
    console.log(myJob)
  }
  catch(err){
    console.log(err.message)
  }
}

job()