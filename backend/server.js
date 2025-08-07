const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});