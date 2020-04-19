const router = require('express').Router();
let Market = require('../models/market.model');

router.route('/').get((req, res) =>
{
    Market.find()
        .then(markets => res.json(markets))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) =>
{
    const ItemID = req.body.ItemID;
    const ItemName = req.body.ItemName;
    const URL = req.body.URL;
    const Description = req.body.Description;

    const newMarket = new Market(
        {
            ItemID,
            ItemName,
            URL,
            Description,
        });

    newMarket.save()
        .then(() => res.json('Market added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Market.findByIdAndDelete(req.params.id)
        .then(() => res.json('Market deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Market.findById(req.params.id)
        .then(item => {
            item.ItemID = req.body.ItemID;
            item.ItemName = req.body.ItemName;
            item.URL = req.body.URL;
            item.Description = req.body.Description;

            item.save()
                .then(() => res.json('Market updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


