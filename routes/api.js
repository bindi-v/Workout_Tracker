const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./html.js");

router.post("/api/workouts", ({body}, res) => {
  Workout.create({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
   Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration'},
      },
    },
  ])
 // Workout.find({})
    .then(data => {
      //console.log('Workout', workout);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});

router.get(`/api/workouts/range`, (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' },
        //totalWeight: { $sum: '$exercises.weight' },
      },
    },
  ])
    .limit(9)
 // Workout.find()
    .then(data => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate( params.id, { $push: { exercises: body }},
    //{
     // new: true
   // }
   )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
