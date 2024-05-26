const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome to twitter')
})

app.get('/twitter/user',(req,res)=>{
    res.send('<h1>Harit Rajkotiya</h1>')
})

app.get('/api',function (req,res){
    res.send({name : "harit",birth : "rajkot"})
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})