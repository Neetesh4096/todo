const Task = require("./model");

exports.getall = (req, res, next) => {
  Task.findAll()
    .then((result) => {
      result.forEach((element) => {
        element.dataValues;
      });

      res.json({
        message: "Success",
        output: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.create = (req, res, next) => {
  const task = req.body.task;
  const time = req.body.time;
  const date = req.body.date;
  Task.create({
    task: task,
    time: time,
    date: date,
  })
    .then((result) => {
      res.json({
        message: "Task created Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.delete = (req, res, next) => {
  const id = req.body.id;

  const result = Task.destroy({
    where: {
      id: id,
    },
  })
    .then((result) => {
      console.log(result);
      res.json({ message: "Task deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.update = (req, res, next) => {
  const id = req.body.id;
  const task = req.body.task;
  const time = req.body.time;
  const date = req.body.date;
  const result = Task.update({ task, time, date }, { where: { id } })
    .then((result) => {
      res.json({ message: "Task Updated Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
