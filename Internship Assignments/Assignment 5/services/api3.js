var Ajv = require("ajv");
var ajv = new Ajv();

module.exports = {
  multiple: function(n, ajvFlag) {
    n = Number(n);
    var mult = [];
    for (var i = 1; i <= 10; i++) {
      mult.push(n * i);
    }
    if (ajvFlag == 1) {
      const schemaIp = {
        type: "integer"
      };
      const schemaOp = {
        type: "array"
      };

      const testIp = ajv.compile(schemaIp);
      const isValidIp = testIp(n);

      const testOp = ajv.compile(schemaOp);
      const isValidOp = testOp(mult);

      console.log("\n===========AJV=================\n");
      console.log(
        "API 3 is active \n The input data format is an integer and valid :  " +
          isValidIp
      );
      console.log(
        "The output data format is an array and valid :  " + isValidOp
      );
      console.log("\n==================================");
    }

    return mult;
  }
};
