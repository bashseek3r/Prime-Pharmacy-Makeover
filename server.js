const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Tell Express to serve files from the 'public' folder
app.use(express.static('public'));

// Route for the Home Page
app.get('/', (req, res) => {
    res.render('index');
});

// ROUTE: Shop All Page
app.get('/shop', (req, res) => {
    res.render('shop'); // This looks for shop.ejs in your views folder
});

// Start the server on Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Prime Pharmacy Lab is LIVE at http://localhost:${PORT}`);
});

