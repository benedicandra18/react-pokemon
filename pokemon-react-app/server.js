const express = require("express")
const app = express()

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )
  
  //Bodyparser Middleware
  app.use(bodyParser.json())