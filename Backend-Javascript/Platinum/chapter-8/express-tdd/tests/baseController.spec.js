const baseController = require('../controllers/baseController')

const mockRequest = (body={}, params={}, query={}) =>{
  return{
    body: body,
    params: params,
    query: query
  }
}

const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)

  return res
}

describe('Base Controller hello function', () =>{
  test('res.json called with {status: true, message: hello}', (done) =>{
    const req = mockRequest()
    const res = mockResponse()

    baseController.hello(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true, message: 'Hello World'
    })
    done();
  })
})

describe('Base Controller summarize function', () =>{
  test('res.json called with {status: true, message: "Parameters Summarized", data:{x:x, y:y, result: x+y}}', (done) =>{
    const req = mockRequest({x:5,y:5})
    const res = mockResponse()

    baseController.sum(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true, 
      message: "Parameters Summarized", 
      data:{
        x:req.body.x,
        y:req.body.y, 
        result: req.body.x + req.body.y
      }
    })
    done();
  })
})

describe('Base Controller substraction function', () =>{
  test('res.json called with {status: true, message: "Parameters Substracted", data:{x:x, y:y, result: x-y}}', (done) =>{
    const req = mockRequest({x:5,y:5})
    const res = mockResponse()

    baseController.substract(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true, 
      message: "Parameters Substracted", 
      data:{
        x:req.body.x,
        y:req.body.y, 
        result: req.body.x - req.body.y
      }
    })
    done();
  })
})