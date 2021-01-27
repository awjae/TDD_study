require('dotenv').config();

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

//App
const app = express();
const prodictRoutes = require('./routes');
const mongoose = require('mongoose');

const dbURL = process.env.MONGOOSE;

mongoose.connect(dbURL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoFb Connected....'))
.catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use('/api/products', prodictRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Runnig on ${PORT}`);