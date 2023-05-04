const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const childRouter = require('./routes/childRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/children', childRouter);

module.exports = app;