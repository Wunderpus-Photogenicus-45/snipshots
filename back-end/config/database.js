const mongoose = require('mongoose');
const path = require('path');

const envPath = path.resolve(__dirname + './../../.env');
require('dotenv').config({path: envPath});
const MONGO_URI=process.env.MONGO_URI;

//declare a func, connectDB that connects to db asynchronously
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: 'Snipshots', //orginal way we had it
      writeConcern: { w: 'majority' },
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log('MongoDB Atlas connection error:', error);
  }
};

module.exports = connectDB;
