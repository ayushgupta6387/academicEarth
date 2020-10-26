const Category = require("../models/category");
const slugify = require("slugify");

exports.create = (req, res) => {
  const { name, content } = req.body;
  const slug = slugify(name);
  const image = {
    url: "",
    key: "123",
  };



  const category = new Category({ name, slug, image });
  category.postedBy=req.user._id;
  category.save((err, data) => {
    if (err) {
      console.log("category create error", err);
      return res.status(400).json({
        error: " Category create failed",
      });
    }
    res.json({
      data,
    });
  });
};

exports.list = (req, res) = {};
exports.read = (req, res) = {};
exports.update = (req, res) = {};
exports.remove = (req, res) = {};
