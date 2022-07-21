// const express = require('express')
// const PORT = 3000

// const app = express()

// app.get('/', (req, res) => {
//     res.send("Hello from node app")
// })

// app.listen(PORT, () => {
//     console.log(`App is listening on port : ${PORT}`)
// })

const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from node app");
});

app.listen(port, () => {
  console.log(`App is listening on port : ${port}`);
});