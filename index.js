import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'

// start app
const app = express()
const PORT = 8000;

// middleware 
app.use(bodyParser.json())

// routes
app.get("/", (req, res) => {
  res.send("this is the index page");
});

// mount routes
app.use('/users', usersRoutes)


// server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))