const Service = require("../models/Service");
const multer = require("multer");
const path = require("path");
const { prettyUrlDataImage } = require("../helpers");

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
exports.createService = [
  upload.single("image"), // This will handle the image upload
  async (req, res) => {
    try {
      // Extracting values from the request body
      const { title, price,duration,description } = req.body;
      // Check if the image is available in the request
      const imagePath = req.file ? req.file.path : null;
      // Create a new service with the image path
      const newService = new Service({
        title,
        price,
        duration,
        description,
        image: imagePath,
      });

      // // Save the new service to the database
      await newService.save();

      // Return the saved service as a response
      res.status(201).json(newService);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];
exports.deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.putService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, duration, image } = req.body.params;
    const user = await Service.findByIdAndUpdate(
      id,
      { name, price, duration, image },
      { new: true }
    );
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({ message: "Service updated successfully" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();

    const servicesData = services.map((item) => {
      return {
        id: item._id,
        title: item.title,
        price: item.price,
        duration: item.duration,
        description: item.description,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.image}`),
        // image: prettyUrlDataImage(`http://localhost:5000/${item.image}`),zameniti adresu pri deploy
      };
    });


    res.status(200).json(servicesData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
