import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

/*
1. Express
2. Morgan for HTTP request logger
3. Helmer for HTTP request security
4. Cors for enabling CORS
5. Dotenv for ability to access file .env
*/

import indexRoutes from "./routes/index.routes.js";

// Config dotenv
dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT || 5050;

// Config the express app
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Use main routes
app.use("/api/v1", indexRoutes);

// Start the app
app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
});
