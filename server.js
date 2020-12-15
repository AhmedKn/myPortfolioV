const express = require("express")
const cors = require('cors')
const app = express()
const connectDB =require("./config/connectDB")
const passport = require("passport")
const Accounts = require('./models/Accounts')
const server = require('http').Server(app);


//midlleware
app.use(express.json())
app.use(cors())
app.use(passport.initialize())

//passport configuration
require('./middleware/passport')(passport)

// connect to db
connectDB()

//routes
app.use("/Portfolio",require("./routes/accounts"))

function verifyToken(req , res ,next){
    //get auth header value
    const bearerHeader = req.headers["authorization"];
    //verify if bearer is undefined
    if (typeof bearerHeader !== 'undefined'){
        // split at the space
        const bearer = bearerHeader.split('')
        // get token from the array
        const bearerToken = bearer[1]
        //set the token
        req.token = bearerToken
        //next 
        next();

    }
    else {
        //forbidden
        res.sendStatus(403);
    }
}

if(process.env.NODE_ENV === "production"){
    app.use(express.static("portfolio/build"))
}

//run server  
const PORT = process.env.PORT||5000
server.listen(PORT,err => err?console.log("err"):console.log(`connected to port ${PORT}`))