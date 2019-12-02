//import express from 'express' is the ES module
//in Node, you use the syntax below--
const express = require('express');

const Hubs = require('./data/hubs-model'); //<<<1: import the database file

const server = express();

server.get('/', (req,res) => {
    res.send({API: 'up and running'})
});

server.use(express.json()); //<<<<<<<< needed to parse JSON from req.body

//list of hubs GET /hubs <<< 2: implement endpoint
server.get('/hubs', (req, res) => {
    //get the list of hubs from the database
    Hubs.find()
    .then(hubs => {
        res.status(200).json(hubs)
    })
    .catch(err => {
        console.log(err, 'error on GET /hubs')
        res.status(500).json({ errorMessage: 'Could not get the database' })
    })
   
})
//add a hub
server.post('/hubs', (req,res) => {
    //get the data the client sent
    const hubData = req.body; //express doesn't know how to parse JSON, so you have to go add the server.use(express.json())
    Hubs.add(hubData)
    .then(hub => {
        res.status(201).json(hub)
    })
    .catch(err => {
        console.log(err, 'error on POST /hubs')
        res.status(500).json({ errorMessage: 'Could not add data to the database' })
    })
})

//remove a hub

//update a hub

const port = 6000;
server.listen(port, () => console.log(`\n ** API running on port ${port} \n`));