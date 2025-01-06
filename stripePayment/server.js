const express = require('express');
const app = express();

app.use(express.json());

const port = 5002

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})