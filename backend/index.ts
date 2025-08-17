import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import  authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth",authRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const server = http.createServer(app);

connectDB().then(() => {
    console.log("Database connected successfully");
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) =>{
    console.error("Failed to connect to the database:", error);
})
