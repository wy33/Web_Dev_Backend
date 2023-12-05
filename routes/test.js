// Import express
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! localhost:3000/test');
});

router.get('/id', (req, res) => {
    res.send('Hello World! localhost:3000/test/id');
});

// Export router and its routes
module.exports = router;