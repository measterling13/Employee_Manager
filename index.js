const inquirer = require('inquirer');
const express = require('express');
const mysql2 = require('mysql2');
require('dotenv').config();



const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
);

db.connect(function (err) {
    if (err) throw err;
    mainMenu();
});