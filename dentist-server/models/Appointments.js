const mongoose = require("mongoose");

const appointmentsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    doctors: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctors",
      required: true,
    },
    services:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    }
  },
  { timestamps: true }
);

const Appointments = mongoose.model("Appointments", appointmentsSchema);

module.exports = Appointments;
