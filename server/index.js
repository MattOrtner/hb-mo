const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Sup?!?");
});

app.listen(port, () => {
  console.log(`We are listening on radio ${port}`);
});
