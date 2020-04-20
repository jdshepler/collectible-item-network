const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userID = req.body.userID;
    const password = req.body.password;
    const role = req.body.role;
    const shippingAddress = req.body.shippingAddress;

    const newUser = new User(
        {
            firstName,
            lastName,
            email,
            userID,
            password,
            role,
            shippingAddress,
        });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(item => {
            item.userID = req.body.userID;
            item.password = req.body.password;
            item.role = req.body.role;
            item.shippingAddress = req.body.shippingAddress;

            item.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const user = User.find(user => user.name === req.body.name)
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