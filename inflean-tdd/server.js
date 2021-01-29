require('dotenv').config();

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

//App
const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

const dbURL = process.env.MONGOOSE;

mongoose.connect(dbURL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected....'))
.catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})


// app.listen(PORT);
// console.log(`Running on port ${PORT}`)

module.exports = app;