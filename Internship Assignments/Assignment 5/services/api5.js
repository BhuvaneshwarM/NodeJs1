var Ajv = require("ajv");
var ajv = new Ajv();

module.exports = {
  armstr: function(num, ajvFlag) {
    var arm = 0,
      a,
      b,
      c,
      d;
    num = Number(num);

    temp = num;
    while (temp > 0) {
      a = temp % 10;
      temp = parseInt(temp / 10); // convert float into Integer
      arm = arm + a * a * a;
    }
    if (ajvFlag == 1) {
      const schema = {
        type: "integer"
      };
      const test = ajv.compile(schema);
      const isValid = test(num);
      console.log("\n===========AJV=================\n");
      console.log(
        "  API 5 is active \n The input number is an integer and is valid : " +
          isValid
      );
      console.log("\n==================================");
    }
    if (arm == num) {
      return "Armstrong number";
    } else {
      return "Not Armstrong number";
    }
  }
};
