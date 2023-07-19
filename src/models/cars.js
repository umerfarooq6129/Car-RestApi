const express = require("express");
const mongoose = require("mongoose");

const CarList = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }

})

const CarData = new mongoose.model('CarData',CarList);

module.exports = CarData;