import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/databaseConnect.js";
import routes from "./routes/web.js";
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database Connections
connectDB(DATABASE_URL);

//Handle the json apis
app.use(express.json())

//Handling request
app.use("/", routes);

//Handle post request
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server start at ${port}.`);
});
