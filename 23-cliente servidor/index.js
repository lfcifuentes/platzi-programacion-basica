const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/cursos', function (req, res) {
    res.send('Cursos')
  })
 
app.listen(3000)