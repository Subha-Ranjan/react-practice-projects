// import express from "express"
// import http from "http"
// import {Server} from "socket.io"
// import cors from "cors"

const express=require("express")
const app= express();

const http=require("http")
const {Server} = require("socket.io")
const server = http.createServer(app)

const cors = require('cors')
app.use(cors())


//io- anyting to do with socket-io with backnd
//instance of Server Class 
//const io = new Server(HTTPserver,{CORS info})
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000/",//fontend URL
        methods:["GET","POST"]
    }
})


app.listen(3001,()=>{
    console.log("Server Is Running - Listening to Server")
}
)