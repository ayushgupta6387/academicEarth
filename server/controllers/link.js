const Link = require('../models/link');
const User = require('../models/user');
const Category = require('../models/category');
const slugify = require('slugify');
const { linkPublishedParams } = require('../helpers/email');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.read = (req, res) => {
    const { id } = req.params;
    Link.findOne({ _id: id }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Error finding link'
            });
        }
        res.json(data);
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { title, url, categories, type, medium } = req.body;
    const updatedLink = { title, url, categories, type, medium };

    Link.findOneAndUpdate({ _id: id }, updatedLink, { new: true }).exec((err, updated) => {
        if (err) {
            return res.status(400).json({
                error: 'Error updating the link'
            });
        }
        res.json(updated);
    });
};

exports.remove = (req, res) => {
    const { id } = req.params;
    Link.findOneAndRemove({ _id: id }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Error removing the link'
            });
        }
        res.json({
            message: 'Link removed successfully'
        });
    });
};

exports.clickCount = (req, res) => {
    const { linkId } = req.body;
    Link.findByIdAndUpdate(linkId, { $inc: { clicks: 1 } }, { upsert: true, new: true }).exec((err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                error: 'Could not update view count'
            });
        }
        res.json(result);
    });
};

exports.popular = (req, res) => {
    Link.find()
        .populate('postedBy', 'name')
        .sort({ clicks: -1 })
        .limit(3)
        .exec((err, links) => {
            if (err) {
                return res.status(400).json({
                    error: 'Links not found'
                });
            }
            res.json(links);
        });
};

exports.popularInCategory = (req, res) => {
    const { slug } = req.params;
    console.log(slug);
    Category.findOne({ slug }).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: 'Could not load categories'
            });
        }

        Link.find({ categories: category })
            .sort({ clicks: -1 })
            .limit(3)
            .exec((err, links) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Links not found'
                    });
                }
                res.json(links);
            });
    });
};
