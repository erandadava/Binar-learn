const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {Users} = require('./models');



// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Login Function
app.post("/login", async(req, res, next) => {
  try {
    const { username, password } = req.body;

      //find a user by their username
      const dataUser = await Users.findOne({ where:{
        username: username
      }});

      // console.log(password)
      // console.log(dataUser.dataValues.password)
      //if user username is found, compare password
      if (dataUser != null) {
        const isSame = password == dataUser.dataValues.password;

        //if password is the same

        if (isSame) {
          //send dataUser.dataValues data
          return res.status(200).json({
            message: "Login Success!",
            response: dataUser.dataValues
          });
        } else {
          return res.status(400).json({
            message: "username or password is wrong"
          });
        }
      } else {
        return res.status(400).json({
          message: "username or password is wrong"
        });
      }
  } 
  catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});