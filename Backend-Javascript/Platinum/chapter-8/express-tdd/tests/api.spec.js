const request = require('supertest')
const app = require('../app')

describe('GET /', () =>{
  test('return status 200 and message hello world', (done) => { 
    request(app).get('/').then(res =>{
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body).toHaveProperty('message')
      expect(res.body.status).toBe(true)
      expect(res.body.message).toEqual('Hello World')
      done()
    })
  })
})

describe('GET /sum', () =>{
  test('return status true and sum data', (done) => { 
    request(app).get('/sum').send({x:5, y:5}).then(res =>{
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body).toHaveProperty('message')
      expect(res.body.status).toBe(true)
      expect(res.body.message).toEqual('Parameters Summarized')
      expect(res.body.data.x).toEqual(5)
      expect(res.body.data.y).toEqual(5)
      expect(res.body.data.result).toEqual(10)
      done()
    })
  })
})

describe('GET /substract', () =>{
  test('return status true and substract data', (done) => { 
    request(app).get('/substract').send({x:5, y:5}).then(res =>{
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveProperty('status')
      expect(res.body).toHaveProperty('message')
      expect(res.body.status).toBe(true)
      expect(res.body.message).toEqual('Parameters Substracted')
      expect(res.body.data.x).toEqual(5)
      expect(res.body.data.y).toEqual(5)
      expect(res.body.data.result).toEqual(0)
      done()
    })
  })
})