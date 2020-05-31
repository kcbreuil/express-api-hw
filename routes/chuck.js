const express = require("express");
const router = express.Router();
const axios = require("axios");

// defines path... what the path is going to do (then we use axios to tell what to do)
router.get("/", (req, res) => {
  axios(`https://api.chucknorris.io/jokes/random`).then((apiRes) =>
    res.send(apiRes.data.value)
  );
});

module.exports = router;
