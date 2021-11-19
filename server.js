const app = require("./app");

////Server
const port = process.env.PORT || 2000;
app.listen(port, (req, res) => {
  console.log(`Server Running at ${port}`);
});
