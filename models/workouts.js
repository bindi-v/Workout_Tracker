const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [{
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
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
  date: {
    type: Date,
    default: Date.now
  },
    
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
