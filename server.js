// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// PRODUCTION ONLY
// app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// PRODUCTION ONLY
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db) 
    .then(() => console.log('Sweet! DB Connected!'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));