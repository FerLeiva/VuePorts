const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database')

app.use(cors());
app.use('/', require('./routes/index'));

app.listen(8081, () => {
    console.log('Server started on port 8080')
});