const express = require("express");
const app = express();
const port = 3005
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

//import swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./docs/swagger.json')

app.use('/api/v0/documentation', swaggerUI.serve, swaggerUI.setup(swaggerJson))
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})