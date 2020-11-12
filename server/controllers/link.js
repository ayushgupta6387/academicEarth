const Link = require('../models/link');
const slugify = require('slugify');

exports.create = (req, res) => {
    const { title, url, categories, type, medium } = req.body;
    // console.table({ title, url, categories, type, medium });
    const slug = url;
    let link = new Link({ title, url, categories, type, medium, slug });
    // posted by user
    link.postedBy = req.user._id;
    // save link
    link.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Link already exist'
            });
        }
        res.json(data);
    });
};

exports.list = (req, res) => {
    Link.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Could not list links'
            });
        }
        res.json(data);
    });
};

exports.clickCount = (req, res) => {
    const { linkId } = req.body;
    Link.findByIdAndUpdate(linkId, { $inc: { clicks: 1 } }, { upsert: true, new: true }).exec((err, result) => {
       
        res.json(result);
    });
};
