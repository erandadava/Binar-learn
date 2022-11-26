const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.header("Authorization")
    if (!token) return res.status(403).json({message: "Access Denied"})

    const decoded =  jwt.verify(token, 'SecretkeyJWT');
    console.log(decoded);
    if(decoded.type == "refresh_token"){
      return res.status(403).json({message: "Invalid Token"})
    }
    req.user = decoded
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}