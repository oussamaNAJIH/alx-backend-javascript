const express = require('express');
const app = express();
app.get('/', (req, resp) => {
    resp.send('Hello Holberton School!');
});

app.listen(1245);
