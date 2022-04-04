import express from "express";
import path from "path";
import morgan from "morgan";
import upload from "./multer/images";

import db from "./db";
import router from "./routes/indexRouter";

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(upload);

app.use(router);

app.use(express.static(path.join(__dirname, "public")))

app.listen(app.get("port"));