const express = require("express");
const router = express.Router();

router.put("/count", (req, res) => {
  const { count } = req.body;
  res.send({ message: `This route has been hit ${count}` });
});

router.delete("/reset", (req, res) => {
  res.send("The count has been reset");
});

router.post("/sum", (req, res) => {
  const number = req.body.number;
  res.send(`The sum of ${number} and 7 is ${number + 7}`);
});

router.get("/subtract", (req, res) => {
  const number = req.query.number;
  res.send(`${number} - 7 is ${number - 7}.`);
});

module.exports = router;
