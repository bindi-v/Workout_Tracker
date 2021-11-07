const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(workout => {
      res.json(workout);
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
