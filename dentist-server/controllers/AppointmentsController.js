const { prettyUrlDataImage } = require("../helpers");
const Appointments = require("../models/Appointments");

// Create a newAppointment
exports.createAppointments = async (req, res) => {
  try {
    const { date,time, doctorId, serviceId } = req.body;
    const newAppointment = new Appointments({
      date,
      time,
      doctors: doctorId,
      services: serviceId
    });

    // // Save the new newAppointment to the database
    await newAppointment.save();

    // // Return the saved newAppointment as a response
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all getAppointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointments.find()
        .populate("doctors")
        .populate("services");
      

 
    const appointmentsData = appointments.map((item) => {
      return {
        id: item._id,
        date: item.date,
        time: item.time,
        doctors: {
          id: item.doctors._id,
          name: item.doctors.name,
          position: item.doctors.position,
          image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.doctors.image}`),
        },
        services: {
          id: item.services._id,
          title: item.services.title,
        },
      };
    });
    res.status(200).json(appointmentsData);
  } catch (err) {
    console.log("first",err)
    res.status(500).json({ error: err.message });
  }
};