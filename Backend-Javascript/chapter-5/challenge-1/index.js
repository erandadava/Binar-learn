const express = require('express')
const app = express()
const { user } = require('./models')
const port = 8081

app.use(express.json())

// GET all articles
app.get('/user', async(req, res) => {
 user.findAll()
   .then(user => {
     res.status(200).json(user)
     console.log(user)
   })
   .catch(user => {
     res.status(200).json(user)
     console.log(user)
   })
})

//REGISTER
app.post("/register", async(req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Field Name is Required!"
    });
    return;
  }
  if (!req.body.username && !req.body.password) {
    res.status(400).send({
      message: "username or User cannot be empty!"
    });
    return;
  }

  const dataUser = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role ? req.body.role : "user",
  };

  // Save User in the database
  user.create(dataUser)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
});

// LOGIN
app.post("/login", async(req, res, next) => {
  try {
      const { username, password } = req.body;

        //find a user by their username
        const dataUser = await user.findOne({ where:{
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
            return res.status(201).json({
              message: "Login Success!",
              response: dataUser.dataValues
            });
          } else {
            return res.status(401).json({
              message: "Username or password is wrong"
            });
          }
        } else {
          return res.status(401).json({
            message: "Username or password is wrong"
          });
        }
    } 
    catch (error) {
      console.log(error);
    }
});

app.listen(port, () => {
  console.log(`Server Started! listening at http://localhost:${port}`)
})