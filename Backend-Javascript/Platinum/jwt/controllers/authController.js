const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, refresh_token} = require('../models')

const secret = "SecretkeyJWT"

const register = async (req, res)=>{
  const {username, password} = req.body
  
  // encrypt password
  const encryptedPassword = bcrypt.hashSync(password, 10)

  // save user to db
  User.create({
    username: username,
    password: encryptedPassword
  }).then((data) =>{
    return res.status(201).json({
      id: data.id,
      username: data.username,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  })
}

const login = async(req, res) => {
  const {username, password} = req.body
    
  User.findOne({
    where:{
      username: username
    }
  }).then( async(user) => {
    if (!user){
      return res.json({
        message: "User or password is wrong!"
      })
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      return res.json({
        message: "User or password is wrong!"
      })
    }

    const accessToken = jwt.sign({
      id: user.id,
      username: user.username,
      type:"access_token"
    }, secret, {
      expiresIn: "3m"
    })

    const refreshToken = jwt.sign({
      id: user.id,
      username: user.username,
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
      username: user.username,
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

const whoami = (req, res) => {
  // req.user akan diisi oleh passport-jwt setelah membaca token
  const currentUser = req.user
  return res.status(200).json({
    id: currentUser.id,
    username: currentUser.username
  })
}

module.exports = {
  register,
  login,
  refreshToken,
  whoami
}