//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;
var pass = "";
var userAuthorization = false;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function checkr(req,res,next){
    pass = req.body['password']
    if(pass === "ILoveProgramming"){
        userAuthorization = true;
    }
    next();
}
app.use(checkr);


app.post("/check",(req,res)=>{
    if(userAuthorization){
    res.sendFile(__dirname + "/public/secret.html")}
    else{
    res.redirect('/')
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  