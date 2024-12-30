//imported all the modules
var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
//created an app
const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

//connected to the database
mongoose.connect('mongodb://localhost:27017/Database')
var db=mongoose.connection
db.on('error',()=> console.log("Error in connecting to database"))
db.once("open",()=> console.log("connected to database"))


//here we have taken the valules
app.post("/sign_up",(req,res) => {
    var name = req.body.name
    var age=req.body.age
    var email=req.body.email
    var phno=req.body.phno
    var password=req.body.password
// created an object called data
    var date={
        "name":name,
        "age":age,
        "email":email,
        "phno":phno,
        "password":password
    }

    //here we are checking the error
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        alert("Record Inserted Sucessfully")
    })
    
})
// this used to establish the connection between the local host and the file
app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("listening on port 3000")
