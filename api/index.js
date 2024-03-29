import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();  

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb Database is connected');
}).catch((err) => {
    console.log("Error" + err)
})

const app = express();

app.use(express.json()); 
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

app.listen(4000, () => {
    console.log('Server is runing on port 4000!');
});   

