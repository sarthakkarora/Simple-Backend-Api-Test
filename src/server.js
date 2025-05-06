// Author: Sarthak Arora
const express = require('express');
const app = express();

// Route for /sayHello
app.get('/sayHello', (req, res) => {
    res.json({ message: "Hello User" });
});

// Start server on port 80
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 