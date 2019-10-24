require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

app.get("/api/cars/:id", function(req, res) {
    db.Tesla.findById(req.params.id)
    .then((singleTesla) => {
        res.json({
            message: "Requested single Teslas",
            error: false,
            data: singleTesla
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.put("/api/cars/:id", function(req, res) {
    console.log("I'm inside a put route!");
    console.log(req.body);
    db.Tesla.findByIdAndUpdate(req.body._id, req.body)
    .then(singleTesla => {
        res.json({
            message: `Updated tesla with id: ${singleTesla._id}`,
            error: false,
            data: singleTesla
        });
    }).catch(err => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    });
});

app.delete("/api/cars/:id", function(req, res) {
    db.Tesla.deleteOne({_id: req.params.id})
    .then((response) => {
        // console.log(response);
        res.json({
            message: `Deleted tesla with id: ${req.params.id}`,
            error: false,
            data: response
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
})

app.get("/api/cars", function(req, res) {
    db.Tesla.find({})
    .then((allTeslas) => {
        console.log(allTeslas);
        res.json({
            message: "Requested all Teslas",
            error: false,
            data: allTeslas
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.post("/api/cars/:id/accident/new", function(req, res) {
    db.Accident.create(req.body)
    .then((newAccident) => {
        console.log(newAccident);
        db.Tesla.findByIdAndUpdate(req.params.id, {accident: newAccident._id}, {new: true})
        .then((updatedTesla) => {
            res.json({
                message: "Successfully added accident",
                error: false,
                data: updatedTesla
            });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                message: "Failed to add accident to Tesla",
                error: true,
                data: err
            });
        });
    })
    .catch((err) => {
        console.log(err);
        res.json({
            message: "Failed to create accident",
            error: true,
            data: err
        });
    })
});

app.post("/api/new", function(req, res) {
    req.body.imageURL === "" ? delete req.body.imageURL: req.body.imageURL;
    db.Tesla.create(req.body)
    .then((newTesla) => {
        console.log("New tesla: ", newTesla);
        res.json({
            message: "Successfully created",
            error: false,
            data: newTesla
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.use(express.static(__dirname + '/client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});