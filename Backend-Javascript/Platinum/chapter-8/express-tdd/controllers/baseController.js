module.exports ={
  hello: (req, res) => {
    res.status(200).json({
      status:true,
      message:'Hello World'
    })
  },
  sum: (req, res) => {
    const {x, y} = req.body
    result = x+y
    res.status(200).json({
      status: true, 
      message: "Parameters Summarized", 
      data:{
        x:x, 
        y:y, 
        result: result
      }
    })
  },
  substract: (req, res) => {
    const {x, y} = req.body
    result = x-y
    res.status(200).json({
      status: true, 
      message: "Parameters Substracted", 
      data:{
        x:x, 
        y:y, 
        result: result
      }
    })
  }
}