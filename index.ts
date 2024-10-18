import express, { Request, Response } from 'express';
import dotenv from "dotenv"
import cors from 'cors';
import MongoConnection from './utils/MongoConnection';
import AuthRoutes from "./routes/AuthRoutes"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

MongoConnection();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.use("/api", AuthRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
