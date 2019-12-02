//import express from 'express' is the ES module
//in Node, you use the syntax below--
const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send({API: 'up and running'})
});

const port = 6000;
server.listen(port, () => console.log(`\n ** API running on port ${port} \n`));