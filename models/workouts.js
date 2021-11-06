const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  value: {
    type: Number,
    required: "Enter duration of workout"
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: Number,
  sets: Number,
  distance: Number,
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
