const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});

const app = require('./app');

const port = process.env.PORT || 8000;

mongoose.connect(process.env.URI)
.then(()=> {
  console.log("Connected to database");
})
.catch((err) => {
  console.log(`Database connection error: ${err.message}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});