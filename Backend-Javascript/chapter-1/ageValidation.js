function userAge(usia) {
  if (usia < 13) {
    return "maaf, usia anda di bawah ketentuan pengguna"
  } else if (usia === undefined) {
    return "mohon masukkan usia anda"
  }
  else{
    return "usia anda sudah mencukupi"
  }
}
console.log(userAge(12))