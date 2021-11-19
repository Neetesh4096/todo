const Sequelize = require("sequelize");

/////Database
const sequelize = new Sequelize("todo", "root", "falana", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .sync()
  .then((result) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

/////Database Model
const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  task: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
});

module.exports = Task;
