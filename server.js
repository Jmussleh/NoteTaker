const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
// Require HTML routes
//const htmlRoutes = require("./routes/htmlRoutes")

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//Routes
app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


//Server.js