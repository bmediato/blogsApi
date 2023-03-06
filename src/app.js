const express = require('express');
const loginValidation = require('./middleware/loginValidation');
const { loginController, userController } = require('./controllers');
const {
  displayValidation,
  emailValidation,
  passwordValidation,
} = require('./middleware/userValidation');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginValidation, loginController);
app.post('/user', 
displayValidation, 
emailValidation, 
passwordValidation, userController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
