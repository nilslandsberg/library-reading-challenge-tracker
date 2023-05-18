const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const readerRouter = require('./routes/readerRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/readers', readerRouter);


module.exports = app;