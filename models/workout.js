const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name of workout",
  },
  duration: {
    type: Number,
    required: "Enter duration of workout in Minutes",
  },
  weight:{
    type: Number,
  },
  distance: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  
  }],
  day: {
    type: Date,
    default: Date.now()
  },
    
});

const Workout = mongoose.model("workout", workoutSchema, 'workout');

module.exports = Workout;
