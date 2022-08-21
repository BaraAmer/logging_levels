console.log("************ Welcome ************* ");

//express required 
const express = require('express');
const app = express();

const bodpa = require('body-parser');
app.use(bodpa.json());

//import logger 
const logger = require('./logger/logging.js')

//app.use(express.json);

app.get("/",(req,res)=>{
    logger.debug(req.method + " / This is homepage >>>  : ");
    res.send("welcome to homepage !")
})  

app.route("/admin")
.get((req,res)=>{
    logger.info("Type of method :" + req.method + " / This is info level >>>  : " + req.path);
    res.send(`<h1> Wlecome admin ! </h1>`);
    })
.post((req,res)=>{
    logger.warn("Type of method :"+ req.method + " / This is warn level >>>  : ");
    console.log(req.body);
    res.send(`post method`);
    //res.send("Error")
    })

    
app.get("/user/:uesrname",(req,res)=>{
        const usern = req.params.uesrname
        res.send(`<h1> Wlecome ${usern} ! </h1> <p> your username is ${usern}  </p> `)
    })

    app.listen(4000,()=>{
        logger.info("The server is listenning : ...")
    })