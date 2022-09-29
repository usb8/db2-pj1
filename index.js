const PORT = 3001
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const fetch = require('node-fetch')
require('dotenv').config()

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hihihaha')
})

app.get('/burgers', (req, res) => {
  res.send('Burgers')
})

function notFound(req,res,next) {
  res.status(404)
  const error = new Error('Not Found')
  next(error)
}

function errorHandler(error,req,res) {
  res.status(res.statusCode || 500)
  res.json({
      message: error.message
  })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))