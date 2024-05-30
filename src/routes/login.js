const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    // Implement login logic here
    res.send(`Username: ${username}, Password: ${password}`);
});

module.exports = router;
