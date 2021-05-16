import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const App = express();

App.use(bodyParser.json({limit: "30mb", extended: true}));
App.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
App.use(cors());

const CONNECTION_URL = 'mongodb+srv://kadeh:kadeh123@cluster0.c75jf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => App.listen(PORT, () => console.log('server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify' , false);