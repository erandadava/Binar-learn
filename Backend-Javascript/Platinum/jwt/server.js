const express = require("express");
const port = process.env.PORT || 3005
const router = require('./router') 
const passport = require('./lib/passport')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})