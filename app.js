const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("body");
});

app.post("/", function (req, res) {
    res.send("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
  