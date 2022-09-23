import express from "express";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/db.config.js";
import {consumerRouter} from "./routes/consumer.routes.js"

dotenv.config();

dbConnect();

const app = express();

app.use(express.json());

// CONFIGUREM O SEUS ROTEADORES AQUI!
app.use("/consumer", consumerRouter)

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up at port ${process.env.PORT}`);
});
