import express from "express";
import {logger} from "./utils/logger";

const app = express();



const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`listening to PORT: ${PORT}`);
})