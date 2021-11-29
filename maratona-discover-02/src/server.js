const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port || 3333, () => console.log(`server runnig on ${port || 3333}`));
