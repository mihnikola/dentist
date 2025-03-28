const Service = require("../models/Service");
const multer = require("multer");
const path = require("path");
const { prettyUrlDataImage } = require("../helpers");
const Doctors = require("../models/Doctors");

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
exports.createDoctor = [
  upload.single("image"), // This will handle the image upload
  async (req, res) => {
    try {
      // Extracting values from the request body
      const { name, position,description, experience, service } = req.body;
      // Check if the image is available in the request
      const imagePath = req.file ? req.file.path : null;
      // Create a new newDoctor with the image path
      const newDoctor = new Doctors({
        name,
        position,
        description,
        experience,
        service,
        image: imagePath
      });

      // // Save the new newDoctor to the database
      await newDoctor.save();

      // Return the saved newDoctor as a response
      res.status(201).json(newDoctor);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

// exports.deleteService = async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Service.findByIdAndDelete(id);
//     res.status(200).json({ message: "Service deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// exports.putService = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, price, duration, image } = req.body.params;
//     const user = await Service.findByIdAndUpdate(
//       id,
//       { name, price, duration, image },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     res.status(200).json({ message: "Service updated successfully" });
//   } catch (error) {
//     res.status(500).send("Server Error");
//   }
// };

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctors.find();
    console.log("doctorsData",doctors)
    const doctorsData = doctors.map((item) => {
      return {
        id: item._id,
        name: item.name,
        position: item.position,
        experience: item.experience,
        description: item.description,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.image}`),
      };
    });

    res.status(200).json(doctorsData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all doctors
exports.getDoctorsById = async (req, res) => {
  const {id} = req.params;
  try {
    const doctor = await Doctors.findOne({_id: id});  

    const doctorsData =  {
        id: doctor._id,
        name: doctor.name,
        position: doctor.position,
        experience: doctor.experience,
        description: doctor.description,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${doctor.image}`),
      };
    res.status(200).json(doctorsData);
  } catch (err) {
    console.log("err",err)
    res.status(500).json({ error: err.message });
  }
};
