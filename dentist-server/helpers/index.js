const Time = require("../models/Time");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Readable } = require('stream');  // This imports the Readable stream correctly

// Your base64-encoded image (for example, a PNG image)
// const base64Image = 'iVBORw0KGgoAAAANSUhEUgAA...'; // Your base64 string
  // const report = "blahblah"; // Here report contains base64 string of the file.
  function base64ToUriFunc(base64String) {
    // Convert the base64 string to a buffer
    const fileBuffer = Buffer.from(base64String, 'base64');
    
    // Create a readable stream
    const stream = new Readable();
    
    // Push the buffer to the stream
    stream.push(fileBuffer);
    
    // End the stream
    stream.push(null);

    // Return the stream object
    return stream;
 
}

const prettyUrlDataImage = (data) => {
  return data.replace("\\", "/");
}


const addMinutesToTime = (hours, minutes, minutesToAdd) => {
  // Create a Date object and set the time to the provided hours and minutes
  let time = new Date();
  time.setHours(hours, minutes, 0, 0); // Set to the given hour and minute (e.g., 15:40)
  // Add the minutes to the time
  time.setMinutes(time.getMinutes() + minutesToAdd);
  // Get the updated hours and minutes
  let newHours = time.getHours();
  let newMinutes = time.getMinutes();
  // Format the result to ensure proper 2-digit minute formatting
  return `${newHours}:${newMinutes < 10 ? "0" : ""}${newMinutes}`;
};

const timeToParameters = (timeStr) => {
  let items = [];
  timeStr.map((item) => {
    items.push(item.time.split(":").map(Number));
  });
  return items;
};

const getTimeValues = async (timeRanges) => {
  const result = await Time.find({
    $nor: timeRanges.map((range) => ({
      value: { $gte: range.start, $lte: range.end },
    })),
  });
  return result;
};
const convertWithChooseService = (timeString, serviceDuration) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setMinutes(date.getMinutes() - serviceDuration);
  const newTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
  return newTime;
};

// Middleware to protect routes (auth middleware)
const authenticate = (req, res, next) => {
  const token = req.get('authorization').split(" ")[1]; 

  if (!token) return res.status(403).send("Access denied");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};



module.exports = {
  getTimeValues,
  timeToParameters,
  addMinutesToTime,
  convertWithChooseService,
  authenticate,
  base64ToUriFunc,
  prettyUrlDataImage
};
