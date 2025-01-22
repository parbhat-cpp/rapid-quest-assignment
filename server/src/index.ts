import express from "express";
import cors from "cors";

import config from "./common/config";
import apiRouter from "./routes";
import { routeNotFound } from "./middlewares/route-not-found";

const app = express();
const PORT = config.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.use("*", routeNotFound);

app.listen(PORT, () => {
    console.log("Express Server running on port:", PORT);
});
