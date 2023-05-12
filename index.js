const express = require('express');
const app = express();
require('./db/connect')
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const first = require('./db/firstModel');
const second = require('./db/secondModel');
const third = require('./db/thirdModel');
const four = require('./db/forthModel');
const fifth = require('./db/fifthModel');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

    res.send("hii this is home page");
});

app.post('/first', async (req, res) => {
    try {
        console.log(req.body);
        const firstData = new first(req.body);
        const saveBlog = await firstData.save();
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

app.post('/second', async (req, res) => {
    try {
        const secondData = new second(req.body);
        const saveBlog = await secondData.save();
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

app.post('/third', async (req, res) => {
    try {
        const thirdData = new third(req.body);
        const saveBlog = await thirdData.save();
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

app.post('/fourth', async (req, res) => {
    try {
        const fourthData = new four(req.body);
        const saveBlog = await fourthData.save();
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

app.post('/fifth', async (req, res) => {
    try {
        const fiveData = new fifth(req.body);
        const saveBlog = await fiveData.save();
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

app.get('/firstTable', async (req, res) => {
    try {
        // const firstRel = await second.find().populate('first_id')
        const firstRel = await first.aggregate([
            {
                $lookup: {
                    from: "second",
                    localField: "_id",
                    foreignField: "first_id",
                    as: "inventory_docs"
                }
            }
        ])
        console.log(firstRel);
        res.send({
            message: 'success'
        })
    } catch (error) {
        res.send({
            message: 'failure'
        })
    }
});

http.listen(port, () => {
    console.log("port is live on", port);
})

