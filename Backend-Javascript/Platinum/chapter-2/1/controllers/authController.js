const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')

module.exports ={
  registerPage: (req, res) => {
    res.render('register')
  },
  registerUser: async(req, res) => {
    const {username, password} = req.body

    console.log(req.body);

    // pass encryption
    const encryptedPassword = bcrypt.hashSync(password, 10)

    if(username == "" || password == ""){
      if (username == ""){
        return res.status(404).json({
          status: 404,
          message: "username tidak boleh kosong"
        })
      }
      if (password == ""){
        return res.status(404).json({
          status: 404,
          message: "password tidak boleh kosong"
        })
      }
    } else {
      // create User
      const create = await User.create({
        username: username,
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      console.log(create);
      if (create == null){
        return res.status(500).json({
          status: 500,
          message: "Server error"
        })
      }
      return res.redirect('/login')
    }
  },

  loginPage:(req, res) => {
    let messages = ''
    if (req.session) {
      if (req.session.messages) {
        // ambil pesan error dari array pertama
        messages = req.session.messages[0]

        // reset isi message
        req.session.messages = []
      }
    }
    res.render('login', {messages: messages})
  },
  
  login: passport.authenticate('local',{
    succesRedirect: '/home',
    failureRedirect: '/login',
    failureMessage: true
  }),

  loginUser: async(req, res) => {
    const {username, password} = req.body
    
    User.findOne({
      where:{
        username: username
      }
    })
    .then(resp => {
      if (resp == null) return resp.status(404).json({
        msg: "Username or password is wrong!"
    })

      bcrypt.compare(password, resp.password, (err, data) => {
        if (err) throw err

        if (data){
          res.redirect('/home')
        }else{
          return res.status(400).json({
            msg: "Username or password is wrong!"
          })
        }
      })
    })
  }
}