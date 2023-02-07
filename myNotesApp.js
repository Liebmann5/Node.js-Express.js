require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser');



console.log("Hello World");




//THIS WAS THE 2nd PLACE I MOVED THE ABSOLUTE DUMBEST ONE TO!!!!


app.use("/public", express.static(__dirname + "/public"));


// DOESN'T WORK!!!!!!!
// app.get("/", function(req, res) { 
//     res.send('Hello Express'); 
// });
// WORKS!!!!!!
// app.get("/", function(req, res) {
//     res.send("Hello Express");
//   });


app.get("/", (req, res) => { res.sendFile(absolutePath = __dirname + "/views/index.html"); });


//Mount the express.static() middleware to the path /public with app.use(). The absolute path to the assets folder is __dirname + /public.
// app.use("/public", express.static(__dirname + "/public"));      //moved this up





//THIS WAS THE 3rd PLACE I MOVED THE ABSOLUTE DUMBEST ONE!!!!
//#7 Had to be moved higher
//FCC NOTE:Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to
//work for all the routes, it should be mounted before them.
//app.use(function (req, res, next) { 
app.use(function (req, res, next) { 
    //console.log(`${req.method} ${req.path} - ${req.ip}`)
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});






//NOTE:So pretty sure "serve" just implies, !'some code'! will go in the HANDLER f(n)!!! The some code, is the code you want served
//FCC:Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser
    //to your-app-url/json, you should see the message on the screen.
    //2nd sentence ==> http://localhost:3000/json
//Q:What does "point" mean??????{Like in 2nd sentence about the browser??}
// app.get("/json", (req, res) => { 
//     res.json({
//             "message": "Hello json"
//     });
// });


//^ This ???????{route; I believe - [why?... check out 2nd sentence of FCC #2]} might be considered{reffered to as} the "/json GET route handler"!!!!!!
// FCC DIRECTIONS:
// Let's add an environment variable as a configuration option.

// Create a .env file in the root of your project directory, and store the variable MESSAGE_STYLE=uppercase in it.

// Then, in the /json GET route handler you created in the last challenge access process.env.MESSAGE_STYLE and
// transform the response object's message to uppercase if the variable equals uppercase. The response object
// should either be {"message": "Hello json"} or {"message": "HELLO JSON"}, depending on the MESSAGE_STYLE value.
// FCC Note: that you must read the value of process.env.MESSAGE_STYLE inside the route handler, not outside of it,
// due to the way our tests run.
app.get("/json", (req, res) => { 
    if (process.env.MESSAGE_STYLE === 'uppercase')
        response = "Hello json".toUpperCase();
        //this.response.toUpperCase();
    else
        response = "Hello json";
    //print("Desperation and " + response);   < This is a dumb idea because that would print the statement to the browser BUT IT DOESN'T WORK!!!
    console.log("Desperation and " + response);
    return res.json({ "message": response });
});



//THIS IS THE ABSOLUTE DUMBEST ONE!!!!
//To mount a middleware function at root level, app.use(<mware-function>)
//NOTE: In #4 it said if to not add path for it to be applied to all requests!!!
/*app.use(function(req, res, next) {
    //console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
*/



//FCC: In the route app.get('/now', ...)    chain a middleware function     and the final handler.
/*??How am I not putting 3 functions here? 1st is the one after PATH / then chained I assume means the comma after that/a f(n) so that makes 
the middleware f(n) 2nd / and finally the last handler is the 3rd f(n) which is b/c it's reffered to as handler, so assume it is, again just a
normal f(n)??*/
app.get("/now", function(req, res, next) {     //In FCC example the PATH {"/user"} == the request object {"req.user"}... what the heck is goin on here??
    req.time = new Date().toString();   //How is req.time an obj{I could maybe see how it becomes one b/c we set it = to new Date()}? How is it a key?
        //Who is requesting the time? When will who wants the time get it?
        //IDEA: If the req is an object then is time a variable in there?? And that is what we are setting this date value to??
    next();
}, 
    function(req, res) {
   //Does this f(n) not get a next b/c there are no more f(n)'s to call after this one? Why haven't I used req and res in the same f(n) yet? Isn't this considered the chained f(n)?
   //console.log(req.time);
   //console.log(typeof(req.time));     == string
   res.json({"time": req.time});
});
//IDEA: Maybe only 2 f(n)'s because the mddleware f(n) goes 1st and then the handler!! So it's 'in the middle', considering the fact, it's like in the way or "inbetween the way" things
//should be, which is (PATH, HANDLER)   ~~>     what it's doing though (PATH, MIDDLEWARE, HANDLER)!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//IDEA: A HANDLER FUNCTION USES THE res VARIABLE!!! WHEN IT RESPONDS TO THE CLIENT IT'S ENDING THE REQUEST-RESPONSE LOOP!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//This is some El Toro Poopoo!!! I moved it up and nathin. Time resets everytime and it's a string so booo!



//FCC: Build an echo server, mounted at the route GET /:word/echo. Respond with a JSON object, taking the structure {echo: word}. You can find the word to be repeated
//at req.params.word. You can test your route from your browser's address bar, visiting some matching routes, e.g. your-app-rootpath/freecodecamp/echo.
//they said to mount and to my knowledge you only mount middleware I don't think you ever mount a HANDLER f(n)???????
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-get-route-parameter-input-from-the-client/301513  =>  how do you build a GET/POST method and how is that any different
//than our app.get()???????
//Also, the directions say to build a server??? How did my let echos not accomplish that??? I thought that... that was the way you create a new server instance??? With below's answer
//didn't we just mount at the route {app.get()} so how and when did we build an echo server???
//let echos = express();
app.get("/:word/echo", function(req, res, next) {
    //console.log(req.params.word);
    res.json({"echo": req.params.word});
});



//FCC: Build an API endpoint, mounted at GET /name. Respond with a JSON document, taking the structure { name: 'firstname lastname'}. The first and last name parameters should be encoded
//in a query string e.g. ?first=firstname&last=lastname.
/*app.get("/name", (req, res) => {
    console.log(req.query.first);
    console.log(typeof(req.query.first));
    console.log(req.query.last);
    console.log(typeof(req.query.last));
    console.log((req.query.first + " " + req.query.last));
    console.log(typeof(req.query.first + " " + req.query.last));
    console.log(req.query.first + "--------------------------------------------------");
    res.json({ "name": (req.query.first + " " + req.query.last) });     //??Is res.json OR EVEN res.send equivalent or = to .post like below???
});*/
//ANSWER: THESE URL's WORKED ==>    'http://localhost:3000'     &&      'http://localhost:3000/'
//MY ORIGINAL ANSWER... but assumed I was wrong because of their silly non-necessary silly fooish note! but it is && doesn't work!?!?!?!?
/*app.route("/name", (req, res, next) => { 
    let first = req.query.first;
    let last = req.query.last;
    
    res.json({ "name": (first + " " + last) });
    //next();
});*/

//BUT THIS DOES????
app.route("/name").get((req, res, next) => { 
    let first = req.query.first;
    let last = req.query.last;
    
    res.json({ "name": (first + " " + last) });
    //next();   <=This doesn't matter!! obvi XOxo
});
//!!!!!!!!!!!!!!!!!   To add to the madness in their SOLUTION I'm pretty sure they use my 1st one which means that one should be fine too!   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*app.route("/name").get((req, res, next) => { 
    let first = req.query.first;
    let last = req.query.last;
    console.log(req.query.last);
    console.log(first);
    console.log(last);
    //res.json({ "name": (first + " " + last) });  //??I thought responding with anything ended the request-response loop... so how the heck did .post()??? Also where'd we send json to???
    next();
}).post((req, res) => { //??How were we supposed to know to runa post method???? How does the keyword SEND send our string to the URL??? Its specific position in the URL none the less???
    console.log(first);
    //console.log(req.query.last);
    //NOTE: JK below don't think anything in post worked!!
    //res.send({ "name": ("?first="(first) + "&last=" + (last)) });  <= This works too... HOW???
    res.post({ "name": ("?first="(first) + "&last=" + (last)) }); //??Is this how this was supposed to work?? Are we supposed to make variables in .get() & are they visible down the chain?
});*/
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-get-query-parameter-input-from-the-client/301512
//Q: ^1st sentence, "Given the endpoint URL"... what's the endpoint URL? How did we figure that out?



//FCC:body-parser has already been installed and is in your project's package.json file. require it at the top of the myApp.js file and store it in a variable named bodyParser. The
//middleware to handle URL encoded data is returned by bodyParser.urlencoded({extended: false}). Pass the function returned by the previous method call to app.use(). As usual, the
//middleware must be mounted before all the routes that depend on it.
//Q: Which previous method call FCC come on; like the previous answers or the bodyParser result value after the .urlencoded() method thing runs?????
                      // app.path("/name").get((req, res) => { bodyParser.urlencoded({ extended: false }) }).       <  Moved above /name but this doesn't work with name I guess!?
//ANSWER: The URL I used was => http://localhost:3000/
//Q:"To parse the data coming from POST requests" - where is this POST coming from??? Is it the user's POST or is it my POST to the user or something else??? On top of this idea how would
//we figure out what POST we're dealing with... like determine whether it's mine or the user's?!?!?!
app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json());   //??? WHY NOT res.json(bodyParser); ????????
//Q: I assume this is just meant to mount to every "path" ya{root}??? So to be clear [bodyParser.urlencoded({ extended: false }) == middleware]{their wording was that the return value of 
//"bodyParser.urlencoded({ extended: false })" is the middleware... so I'd say if 2 things = each other then their =???? Unless I'm wrong???}??? Where is the (req, res, next)???? I feel like
//they've been trying to teach me not to do app.use(" "); (\n) app.use(" "); so why is this one special??? How does the 1st .use() pass it's value to the 2nd??? B/c it's the next mounted
//middleware on the stack??? ALSO, if we are not using next() here then what the heck is the point of it really????
//IDEA:"This package allows you to use a series of middleware, which can decode data in different formats.", maybe this dumb series allows the programmmer to ignore a lot of syntax rules???
//ANS: https://forum.freecodecamp.org/t/basic-node-and-express-use-body-parser-to-parse-post-requests-help/241433/8



//Q: Isn't basically everything that is programmed here either mounting something or an endpoint???
app.post("/name", (req, res, next) => { 
    //res.json({ (req.path): })   //Just trying to set the path name => /name == to the key{I would try to get rid of the / obvi!!}
    res.json({ "name": req.body.first + " " + req.body.last });     //??I have absolutely no idea what in the world I was supposed to learn here!!!!!??
    //??How is this answer any different than the previous one we did?????? Is this just another way to do it???
    //ANS:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-get-data-from-post-requests/301511
    //All the previous assignments made it seem like we needed to gain access to 'req.body' when it literally just did what I assumed it would do!?!?!?
});

 module.exports = app;