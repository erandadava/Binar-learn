const express = require("express");
const session = require("express-session");
const port = process.env.PORT || 3005
const router = require('./routers') 
const passport = require('passport')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret:"rahasia",
  resave:false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())


app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})