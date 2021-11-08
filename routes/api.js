const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./html.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercise.duration'
        },
      },
    },
  ])
    .then((workout) => {
      console.log('Workout', workout);
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});

router.get(`/api/workouts/range`, (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercise.duration'
        },
        totalWeight: {
          $sum: '$exercise.weight'
        },
      },
    },
  ])
    .limit(7)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    },
    {
      new: true
    })
    .then((workout) => {
      res.json(workout);
    })
      //  title: req.body.title,
       // note: req.body.note,
       // modified: Date.now()
     // }
    //},
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;
