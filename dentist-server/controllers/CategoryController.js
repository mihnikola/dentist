const multer = require("multer");
const path = require("path");
const Category = require("../models/Category");

// Set up multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define where the file will be stored
    cb(null, "images/"); // uploads/ folder in the root directory
  },
  filename: function (req, file, cb) {
    // Set the file name (you can modify this to make it more unique)
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to avoid duplicate filenames
  },
});

const upload = multer({ storage: storage });
// Create a new service with image upload
exports.createCategory = [
  upload.single("image"), // This will handle the image upload
  async (req, res) => {
    try {
      // Extracting values from the request body
      const { text, description } = req.body;
      // Check if the image is available in the request
      const imagePath = req.file ? req.file.path : null;
      // Create a new service with the image path
      const newCategory = new Category({
        text,
        description,
        image: imagePath,
      });

      // // Save the new service to the database
      await newCategory.save();

      // // Return the saved service as a response
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];