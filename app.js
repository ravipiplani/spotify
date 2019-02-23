import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

const path = require('path');

require('dotenv').config();

// Set up the express app
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('public'))

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.get('/ui', (req, res) => {
  res.sendFile(path.join(__dirname+'/ui/index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});