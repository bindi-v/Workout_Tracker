const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", ({params, body}, res) => {
  Workout.findOneAndUpdate(
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
    .then((dbWorkout) => {
      res.json(dbWorkout);
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
