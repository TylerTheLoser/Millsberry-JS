async function initConnect(uname, password, password2, first, email, zip, bday_month, bday_day, bday_year, state){
    const MongoClient = require('mongodb').MongoClient;
    const key = require('./config/keys').MongoURI;
    var options = {
        server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } }
    };
    const client = new MongoClient(key, { useNewUrlParser: true, useUnifiedTopology: true }, options);
    client.connect(err => {
    const collection = client.db("Mills1").collection("users");
    //todo: add validation, redirect, bcrypt
    //required fields: uname, password, password2, email
    collection.insertOne({name: uname, signup_password: password, signup_first_name: first, email: email, signup_zipcode: zip, signup_bday_month: bday_month, signup_bday_day: bday_day, signup_bday_year: bday_year, signup_state: state  });
    //collection.insertOne({name: "testname" }); //that works
    console.log("Successful insert to database.");
    alert("Signup Successful!", "Success!");
    window.location.href = "./template/signup_success.html";
    });
    client.close();
}
/*
function addUser(uname){
    console.log(uname);
    initConnect.collection.insertOne({name: uname});
}
*/