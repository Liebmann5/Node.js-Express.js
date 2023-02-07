require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser');





console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => { res.sendFile(absolutePath = __dirname + "/views/index.html"); });

app.use(function (req, res, next) { 
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/json", (req, res) => { 
    if (process.env.MESSAGE_STYLE === 'uppercase')
        response = "Hello json".toUpperCase();
    else
        response = "Hello json";
    console.log("Desperation and " + response);
    return res.json({ "message": response });
});

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, 
    function(req, res) {
   res.json({"time": req.time});
});

app.get("/:word/echo", function(req, res, next) {
    res.json({"echo": req.params.word});
});

app.route("/name").get((req, res, next) => { 
    let first = req.query.first;
    let last = req.query.last;
    
    res.json({ "name": (first + " " + last) });
});

app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json());

app.post("/name", (req, res, next) => { 
    res.json({ "name": req.body.first + " " + req.body.last });
});

 module.exports = app;