const Service = require("../models/Service");
const { prettyUrlDataImage } = require("../helpers");
const Category = require("../models/Category");
const Appointments = require("../models/Appointments");
const Doctors = require("../models/Doctors");

exports.getHomeData = async (req, res) => {
  try {
    const categories = await Category.find();
    const services = await Service.find();
    const appointments = await Appointments.find()
    .populate("doctors")
    .populate("services")
    .limit(2);
    const doctors = await Doctors.find().limit(2);

    const servicesData = services.map((item) => {
      return {
        id: item._id,
        title: item.title,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.image}`),
      };
    });

    const categoriesData = categories.map((item) => {
      return {
        id: item._id,
        text: item.text,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.image}`),
      };
    });

    const doctorsData = doctors.map((item) => {
      return {
        id: item._id,
        name: item.name,
        position: item.position,
        experience: item.experience,
        image: prettyUrlDataImage(`http://10.58.158.121:5000/${item.image}`),
      };
    });

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
    const homeData = {
      categories: categoriesData,
      services: servicesData,
      appointments: appointmentsData,
      doctors: doctorsData,
    };

    res.status(200).json(homeData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
