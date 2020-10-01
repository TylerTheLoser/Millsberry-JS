const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.send('Login'));

//register
router.get('/register', (req, res) => res.render('Register'));

//register handle
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('test');
});

module.exports = router;