require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');
require('dotenv').config();


//environment variable
const origin = process.env.origin;
const constr = process.env.constr;
const SECRET_KEY = process.env.secret;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: origin, credentials: true }));

//mongoose
mongoose.connect(constr);
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const reviewSchema = new mongoose.Schema({
    username: String,
    email: String,
    message: String,
    phone: String,
});

const User = mongoose.model("Users", userSchema);
const Review = mongoose.model("Reviews", reviewSchema);

//default path
app.get('/', (req, res) => {
    const token = req.cookies.authToken;
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) { res.sendFile(path.join(__dirname, 'redirect.html')); }
        else { res.sendFile(path.join(__dirname, 'index.html')); }
    })
});

//login page
app.get('/login', (req, res) => { res.sendFile(path.join(__dirname, 'login.html')); });

//signup page
app.get('/signup', (req, res) => { { res.sendFile(path.join(__dirname, 'signup.html')); } });

//send user name
app.post("/username", async (req, res) => {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, SECRET_KEY);
    const username = decoded.username
    res.send(username);
});

//get reviews
app.get('/reviews', (req, res) => {
    const token = req.cookies.authToken;
    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
        if (err) { res.send('Error: Unauthorized!!!') }
        else {
            const reviews = await Review.find({});
            res.send(reviews)
            res.end();
        }
    })
});

//add reviews
app.post('/addreviews', async (req, res) => {
    await Review.create(req.body);
    res.send('Message sent..')
    res.end();
});

//aceess private files in the root folder
app.get('/private/:name', (req, res) => {
    const token = req.cookies.authToken;
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) { res.sendFile(path.join(__dirname + "/pages", 'redirect.html')); }
        else { res.sendFile(path.join(__dirname + '/files/private', req.params.name)); }
    })
});

//aceess public files in the root folder
app.get('/public/:name', (req, res) => {
    res.sendFile(path.join(__dirname + '/files/public', req.params.name));
});

// **Signup Route**
app.post("/signup", async (req, res) => {
    // const { username, password } = req.body;
    // const user = await User.findOne({ username });
    // if (user) { return res.send('Error: User already registered!') }
    // const hashedPassword = await bcrypt.hash(password, 10);
    // await User.create({ username, password: hashedPassword });
    // res.send("User Registered successfully!");

    res.send("Only admin can signup and login!");
});

// **Login Route**
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Error: Invalid credentials");
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("authToken", token, { httpOnly: true, secure: false });
    res.send("Logged in successfully!");
});

// **Logout Route**
app.post("/logout", async (req, res) => {
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, SECRET_KEY);
    const username = decoded.username
    const newToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1s" });
    res.cookie("authToken", newToken, { httpOnly: true, secure: false });
    res.send('Logged out successfully!');
});



app.listen(6060);
console.log('Server started');
