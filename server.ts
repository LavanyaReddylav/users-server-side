import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express, { Router } from 'express'
import cors from 'cors';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const router = require('express-promise-router')()
require('dotenv/config')


const userRoute = require('./routes/user');


const app = express()

app.use(cors());
app.use(bodyParser.json())


app.use('/user', userRoute)

mongoose.connect('mongodb://localhost:27017/all_users', { useNewUrlParser: true }, (error) => {

    if (error) console.log('not connected to database', error);
    else console.log('successfully connected to database')

});
mongoose.set('use CreateIndexes', true)



const port = 8097;

app.listen(port, () => console.log(`server listening on :  http://localhost:${port}`))


module.exports = router;