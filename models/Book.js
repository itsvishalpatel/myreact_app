var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_date: { type: Date },
    publisher: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Book', BookSchema);

