const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.get("/health", (req, res) => {
  res.send("Sup?!?");
});

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`We are listening to radio ${port}`);
});
