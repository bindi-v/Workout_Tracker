const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [{
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout"
  },
  name: {
    type: String,
    required: "Enter name of workout"
  },
  duration: {
    type: Number,
    required: "Enter duration of workout in Minutes"
  },
  weight:{
    type: Number,
  },
  distance: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  }],
  day: {
    type: Date,
    default: Date.now
  },
    
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
