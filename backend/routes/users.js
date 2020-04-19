const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // try {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //     console.log(hashedPassword)
    // }
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/login').post((req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try{
        if(bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not allowed')
        }
    } catch {
        res.status(500).send()
    }
})

module.exports = router;