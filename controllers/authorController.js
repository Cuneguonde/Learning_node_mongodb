const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_list = asyncHandler(async (req, res, next) => {

  /* const numAuthors = await Author.countDocuments({}).exec();
  console.log('numAuthors: ', numAuthors);
  res.render("index", {author_count: numAuthors}) */

  const allAuthors = await Author.find({}).exec();
  // console.log(allAuthors); // Don' t forget that. basic tool
  res.render("author_list", {
    title: "Author List", author_list: allAuthors
  });
});

  // Display list of all Authors.
  /* exports.author_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author list");
  }); */

  // Display detail page for a specific Author.
  exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
  });

  // Display Author create form on GET.
  exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create GET");
  });

  // Handle Author create on POST.
  exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST");
  });

  // Display Author delete form on GET.
  exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
  });

  // Handle Author delete on POST.
  exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
  });

  // Display Author update form on GET.
  exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  });

  // Handle Author update on POST.
  exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  });
