import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

//4
import postRoutes from './routes/posts.js';

//1.initialize the app
const app = express();

dotenv.config();

//2.
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

//5
app.use('/posts',postRoutes);

//3.connect to db
//const CONNECTION_URL = 'mongodb+srv://hashinodithya1:hashinodithya1@cluster1.woizgam.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
.catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);