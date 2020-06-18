const path = require('path');

// Load ORM
const Sequelize = require('sequelize');

// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
// To use  Heroku Postgres data base:
//    DATABASE_URL = postgres://user:passwd@host:port/database

const url = process.env.DATABASE_URL || "sqlite:videos.sqlite";

const sequelize = new Sequelize(url);

// Import the definition of the Video Table from video.js
sequelize.import(path.join(__dirname, 'video'));

// Import the definition of the User Table from user.js
sequelize.import(path.join(__dirname, 'user'));

// Import the definition of the Session Table from session.js
sequelize.import(path.join(__dirname, 'session'));


// Declaration of the const of the tables
const {video, user, session} = sequelize.models;


// Relation 1-to-N between User and Video:
user.hasMany(video, {as: 'content', foreignKey: 'userId'});
video.belongsTo(user, {as: 'creator', foreignKey: 'userId'});



module.exports = sequelize;
