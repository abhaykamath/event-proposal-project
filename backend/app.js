const express = require("express");
const accountRouter = require("./routes/accountRouter");
const proposalRouter = require("./routes/proposalRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/eventapp/api/v1/account", accountRouter);
app.use("/eventapp/api/v1/proposal", proposalRouter);

module.exports = app;
