// index.js
import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import registerRouter from "./routes/register.js";
import loginRouter from './routes/login.js';
import logoutRouter from "./routes/logout.js";
import budgetRouter from "./routes/budget.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('/api', logoutRouter);
app.use('/api', budgetRouter);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(async () => {
        console.log('MongoDB connection successful');
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    }).catch((error) => console.log(`${error} did not connect`));