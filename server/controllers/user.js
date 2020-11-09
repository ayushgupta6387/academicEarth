const User = require('../models/user');
const Link = require('../models/link');

exports.read = (req, res) => {
    User.findOne({ _id: req.user._id }).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
     

    User.findOneAndUpdate({ _id: req.user._id }, { name, password, categories }, { new: true }).exec((err, updated) => {
        if (err) {
            return res.staus(400).json({
                error: 'Could not find user to update'
            });
        }
        updated.hashed_password = undefined;
        updated.salt = undefined;
        res.json(updated);
    });
};
