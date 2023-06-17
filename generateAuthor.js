#! /usr/bin/env node
const Author = require("./models/author");

const authors = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

main().catch((err) => console.log(err)); // Notable : Le 'catch' est déclaré avant la function ciblé par lui.(pardon pour la langue francaise)

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect("mongodb+srv://antoinephilippe:6li1GvDEEkmtx2kF@cluster0.qfwgsgd.mongodb.net/");
    console.log("Debug: Should be connected?");
    await createAuthors();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function authorCreate(first_name, family_name, d_birth, d_death) {
    const authordetail = { first_name: first_name, family_name: family_name };
    if (d_birth != false) authordetail.date_of_birth = d_birth;
    if (d_death != false) authordetail.date_of_death = d_death;

    const author = new Author(authordetail);

    await author.save();
    authors.push(author);
    console.log(`Added author: ${first_name} ${family_name}`);
}

async function createAuthors() {
    console.log("Adding authors");
    await Promise.all([
        authorCreate("Patrick", "Rothfuss", "1973-06-06", false),
        authorCreate("Ben", "Bova", "1932-11-8", false),
        authorCreate("Isaac", "Asimov", "1920-01-02", "1992-04-06"),
        authorCreate("Bob", "Billings", false, false),
        authorCreate("Jim", "Jones", "1971-12-16", false),
    ]);
}