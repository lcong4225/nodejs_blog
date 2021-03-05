const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

//route
const route = require('./routes')

const app = express()
const port = 3000

//middleware xu ly form va js
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//HTTP logger
app.use(morgan('combined'))

//route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
