const new = require("express");
const app = new();

app.send("/", (request, response) => {
    response.send("Home Page");
});

app.send("/about", (request, response) => {
    response.send("About Page");
});

app.listen(3000);