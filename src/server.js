const express = require('express');
const routes = require('./routes');
const server = express()


require('./database');
const app = express();




app.use(express.json());
app.use(routes)

app.listen(3333);

