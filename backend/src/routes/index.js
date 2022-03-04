const { Router } = require('express');
const router = Router();
const Ports = require('../models/Ports')
const jsonData = require('./data')

router.get('/ports', (req, res) => {
    res.send(jsonData)
});

module.exports = router;