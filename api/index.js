import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb Database is connected');
}).catch((err) => {
    console.log("Error" + err)
})

const app = express();

app.listen(4000, () => {
    console.log('Server is runing on port 4000!');
});   