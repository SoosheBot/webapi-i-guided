//import express from 'express' is the ES module
//in Node, you use the syntax below--
const express = require('express');

const Hubs = require('./data/hubs-model'); //<<<1: import the database file

const server = express();

server.get('/', (req,res) => {
    res.send({API: 'up and running'})
});

//list of hubs GET /hubs <<< 2: implement endpoint
server.get('/hubs', (req, res) => {
    //get the list of hubs from the database
    Hubs.find()
    .then(hubs => {
        res.status(200).json(hubs)
    })
    .catch(err => {
        res.status(500).json(err, 'Could not get the database')
    })
   
})
//add a hub

//remove a hub

//update a hub

const port = 6000;
server.listen(port, () => console.log(`\n ** API running on port ${port} \n`));