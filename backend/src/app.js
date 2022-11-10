const express = require('express');
const cors = require('cors');
const usercontroller = require('./controllers/user.controller'); 


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: `Welcome to showrom.`});
});
app.route('/api/user')
    .post(usercontroller.create);

app.route('/api/user/:id')
    .put(usercontroller.update)
    .delete(usercontroller.delete);

module.exports = app;
