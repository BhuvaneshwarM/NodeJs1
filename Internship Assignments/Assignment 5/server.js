const express = require("express");
const routes=require('./routes');
const app = express();
const port = 3000;

routes.RouteF.homepage(app);

routes.RouteF.api1(app);

routes.RouteF.api2(app);

routes.RouteF.api3(app);

routes.RouteF.api(app);

routes.RouteF.api4(app);

routes.RouteF.api5(app);

module.exports = app.listen(port, () =>          //Make the server listen in the port 3000
  console.log("App is listening to the port 3000")
);
