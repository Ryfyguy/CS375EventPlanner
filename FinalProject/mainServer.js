var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(express.static("public"));

app.use(bodyParser.urlendcoded({ extended: false }));

app.listen(8080);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hg080900",
    database: "main"
});

app.post("/login", function(request, response){
    var name = request.body.username;
    var pass = request.body.password;
    var password;
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected");
        con.query("SELECT pass FROM usernames WHERE username = ?",[name],function(err, rows){   
            if (err) throw err;
            else{
                rows.forEach(function(row)
                {
                    password = row.pass
                });
            };
        });
    });
    if (password == pass)
    {
        response.send("Success");
    }
    else
    {  
        response.send("Wrong Password or Username");
    }
});

app.post("/newAccount", function(request, response){
    var name = request.body.username;
    var pass = request.body.password;
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected");
        con.query("INSERT INTO usernames (username, pass) VALUES ?", [name,pass]);
        response.send("Account Created Successfully");
    })    
});

app.post("/newEvent", function(request, response){
    var name = request.body.name;
    // add more variables for each event information thing
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected");
        // commands to add information to table
    });
});