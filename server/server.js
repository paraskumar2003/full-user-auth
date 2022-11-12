import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import session from 'express-session';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import passport from 'passport';
import * as passportSetup from './passport.js';

dotenv.config();

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,POST,PUT,DELETE',
    credentials:true,
}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: true,
    saveUninitialized: true,
 }));

app.use(passport.initialize()); 
app.use(passport.session()); 
app.use('/',authRoute);
app.use('/auth',authRoute);






app.listen(4500 || process.env.PORT,()=>{
    console.log('server @4500');
});