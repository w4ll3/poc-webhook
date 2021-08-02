import * as dotenv from "dotenv";
import express from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { router } from "./router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt((process.env.PORT || 5454) as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.set("view engine", "pug");

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
