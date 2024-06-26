require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('Home')
})

app.get('*', (req, res) => {
  res.render('error404')
})


app.listen(process.env.PORT, () => {
  console.log("Rest rant running on PORT:", `http://localhost:${process.env.PORT}`)
})




