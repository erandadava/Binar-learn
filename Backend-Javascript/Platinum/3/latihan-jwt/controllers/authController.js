const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, refresh_token} = require('../models')

const secret = "SecretkeyJWT"

const register = async (req, res)=>{
  const {email, password} = req.body
  
  // encrypt password
  const encryptedPassword = bcrypt.hashSync(password, 10)

  // save user to db
  User.create({
    email: email,
    password: encryptedPassword
  }).then((data) =>{
    return res.status(201).json({
      id: data.id,
      email: data.email,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
}

const login = async(req, res) => {
  const {email, password} = req.body
    
  User.findOne({
    where:{
      email: email
    }
  }).then( async(user) => {
    if (!user){
      return res.json({
        message: "Email or password is wrong!"
      })
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      return res.json({
        message: "Email or password is wrong!"
      })
    }

    const accessToken = jwt.sign({
      id: user.id,
      email: user.email,
      type:"access_token"
    }, secret, {
      expiresIn: "3m"
    })

    const refreshToken = jwt.sign({
      id: user.id,
      email: user.email,
      type:"refresh_token"
    }, secret, {
      expiresIn: "2d"
    })

    await refresh_token.create({
      user_id: user.id,
      token:refreshToken,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    
    return res.status(200).json({
      id: user.id,
      email: user.email,
      accessToken: accessToken,
      refresh_token: refreshToken
    })
  })
}

const refreshToken = async(req, res)=>{
  const {token} = req.body
  const refreshToken = await refresh_token.findOne({
    where: {
      token: token
    }
  })

  if(!refreshToken){
    return res.json({
      message: "Token not defined"
    }).status(400)
  }

  const userx = await User.findOne({
    where:{
      id: refreshToken.dataValues.user_id
    }
  })

  if (!userx) {
    return res.json({status: 400, message:"User Not Found!"}).status(400)
  }

  const accessToken = jwt.sign({
    id: userx.id,
    username: userx.username,
    type:"access_token"
  }, secret, {
    expiresIn: "3m"
  })

  const reToken = jwt.sign({
    id: userx.id,
    username: userx.username,
    type:"refresh_token"
  }, secret, {
    expiresIn: "2d"
  })

  await refresh_token.create({
    user_id: userx.id,
    token:reToken,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  
  return res.status(200).json({
    id: userx.id,
    username: userx.username,
    accessToken: accessToken,
    refresh_token: reToken
  })
}

module.exports = {
  register,
  login,
  refreshToken,
}