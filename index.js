const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

const PORT = process.env.PORT || 5000;
server.get("/", (req, res) => {
  res.status(200).json({ hello: "and welcome" });
});

server.listen(PORT, () => console.log(`API running on ${PORT}`));
