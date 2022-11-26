const express = require("express");
const session = require("express-session");
const router = require('./router')
const passport = require('./lib/passport')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./docs/swagger.json')

const port = process.env.PORT || 3005
// const passport = require('./lib/passport')

const app = express();

app.use('/api/v0/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:'rahasia',
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})