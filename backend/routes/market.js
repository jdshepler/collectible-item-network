const router = require('express').Router();
let Market = require('../models/market.model');

router.route('/').get((req, res) =>
{
    Market.find()
        .then(market => res.json(market))
        .catch(err => res.status(400).json('Error: ' + err));
});

