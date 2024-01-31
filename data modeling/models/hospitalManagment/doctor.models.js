import mongoose from "mongoose";

const workInHospitalSchema = mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    weeklyHours: {
      type: Number,
      default: 0,
      required: true,
    },
    yearsOfService: {
      type: Number,
      default: 0,
    },
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospital: [workInHospitalSchema],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
