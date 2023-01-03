import mongoose from "mongoose";
import dotenv from "dotenv";

// Config .env and mongoose
dotenv.config();
mongoose.set("strictQuery", true);

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DBNAME } = process.env;
const mongoURI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@samplecluster.djadqmp.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;

await mongoose.connect(mongoURI);

export default mongoose;
