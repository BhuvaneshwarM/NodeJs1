const controller = require(".\\..\\Controller");

module.exports = {
  homepage: function(app) {
    app.get("/", function(req, res) {
      controller.ControlF.homepage(req, res);
    });
  },

  api1: function(app) {
    app.get("/api1", function(req, res) {
      controller.ControlF.api1(req, res);
    });
  },

  api2: function(app) {
    app.get("/api2", function(req, res) {
      controller.ControlF.api2(req, res);
    });
  },

  api3: function(app) {
    app.get("/api3", function(req, res) {
      controller.ControlF.api3(req, res);
    });
  },

  api4: function(app) {
    app.get("/api/4", function(req, res) {
      controller.ControlF.api4(req, res);
    });
  },

  api5: function(app) {
    app.get("/api/5", function(req, res) {
      controller.ControlF.api5(req, res);
    });
  },

  api: function(app) {
    app.get("/api", function(req, res) {
      controller.ControlF.api(req, res);
    });
  }
};
