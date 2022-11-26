module.exports={
  home: (req, res) =>{
    const {id, username} = req.user
    res.json({
      message: `Successful Login! Welcome ${username}`
    })
  }
}