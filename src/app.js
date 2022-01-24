const express = require('express');
const routes = require('./routes/tasks');
const { port } = require('./configs');

const app = express();

app.use(express.json());
app.use('/tasks', routes);

app.listen(port, () => console.log(`Server listen on port ${port}`));