import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/img', express.static('img'))

app.use(router);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));