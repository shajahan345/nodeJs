const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/dbConnection')
const errorHandler = require('./middleware/errorHandler')
const port = process.env.PORT || 3000;
connectDb()
app.use(express.json())
app.listen(port, () => {
    console.log(port);
    console.log("Welcome to the Server");
});

app.use(errorHandler)
app.use('/api/contacts', require('./routes/contactRoutes'))
