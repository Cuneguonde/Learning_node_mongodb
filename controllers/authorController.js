const Author = require("../models/author");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.author_list = asyncHandler(async (req, res, next) => {

  /* const numAuthors = await Author.countDocuments({}).exec();
  console.log('numAuthors: ', numAuthors);
  res.render("index", {author_count: numAuthors}) */

  const allAuthors = await Author.find({}).exec();
  res.render("author_list", {
    title: "Author List", author_list: allAuthors
  });
});

  // Display detail page for a specific Author.
  exports.author_detail = asyncHandler(async (req, res, next) => {
    const author = await Author.findById(req.params.id).exec()
    console.log(author)
    res.render("author_detail", {
      title: "Author Detail",
      author: author,
    });
  });

  // Display Author create form on GET.
  exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.render("author_form", { title: "Create Author" });
  });

  // Handle Author create on POST.
  exports.author_create_post = [
    body("first_name", "First name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
    asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);
      console.log('hin',req.body)
      const author = new Author({ first_name: req.body.first_name });
      console.log(author);
      if (!errors.isEmpty()) {
        res.render("author_form", {
          title: "Create Author",
          author: author,
          errors: errors.array(),
        });
        return;
      } else {
        // Data from form is valid.
        // Check if Genre with same name already exists.
        const genreExists = await Author.findOne({ name: req.body.first_name }).exec();
        if (genreExists) {
          // Genre exists, redirect to its detail page.
          res.redirect(genreExists.url);
        } else {
          await author.save();
          // New genre saved. Redirect to genre detail page.
          res.redirect(author.url);
        }
      }
    }),
];

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
