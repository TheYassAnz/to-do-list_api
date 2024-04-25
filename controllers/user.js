const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    delete req.body._id;
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'User created!' }))
        .catch(error => res.status(400).json({ error }));
};

exports.login = (req, res) => {
    delete req.body._id;
    User.findOne({ email: req.body.email, password: req.body.password })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ error: 'User not found!' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        })
        .catch((err) => res.status(400).json({ err }));
}