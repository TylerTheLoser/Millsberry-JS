async function initLogin(uname, password){
    const MongoClient = require('mongodb').MongoClient;
    const key = require('./config/keys').MongoURI;
    var options = {
        server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } }
    };
    const client = new MongoClient(key, { useNewUrlParser: true, useUnifiedTopology: true }, options);
    client.connect(err => {
    const collection = client.db("Mills1").collection("users");
    collection.find({name: uname, signup_password: password}).toArray(function(err, result){
        if(err) alert("Login failed.");
        alert("Login success!");
    });
    //alert("Login Successful!", "Success!");
    //window.location.href = "./template/signup_success.html";
    });
    client.close();
}