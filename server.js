const express = require("express");
const app = express();

app.use(express.json());

const ping = require("./routes/ping");
app.use("/ping", ping);

const math = require("./routes/math");
app.use("/math", math);

const chuck = require("./routes/chuck");
app.use("/chuck", chuck);

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
