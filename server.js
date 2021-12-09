const app = require("./app");
require("dotenv").config({.env});
const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server running (3000)");
