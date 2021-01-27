const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

//App
const app = express();
const prodictRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@react-clone-1.izgtn.mongodb.net/hello?retryWrites=true&w=majority',
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