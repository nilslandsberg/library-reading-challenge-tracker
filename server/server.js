const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const app = require('./app');

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI)
  .connect("mongodb://localhost/readingChallenge")
  .then(()=> {
    console.log("Connected to database");
  })
  .catch(err => console.log(err));

  app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
  })