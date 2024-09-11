const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Define a route to serve JSON data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the local server!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
