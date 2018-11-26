var Ajv = require("ajv");
var ajv = new Ajv();

module.exports = {
  occurence: function(sentence, ajvFlag) {
    var obj = {};
    for (var i = 0; i < sentence.length; i++) {
      if (!(sentence[i] in obj) && sentence[i] != " ") {
        var c = sentence[i];
        var freq = (sentence.match(new RegExp(c, "g")) || []).length;
        obj[c] = freq;
      }
    }
    if (ajvFlag == 1) {
      const schemaIp = {
        type: "string"
      };
      const schemaOp = {
        type: "object"
      };
      const testIp = ajv.compile(schemaIp);
      const isValidIp = testIp(sentence);
      const testOp = ajv.compile(schemaOp);
      const isValidOp = testOp(obj);
      console.log("\n============AJV===============");
      console.log("API 4 is active now");
      console.log("Input dataformat is valid(string) : " + isValidIp);
      console.log("Output dataformat is valid(object) : " + isValidOp);
      console.log("\n================================");
    }
    return obj;
  }
};
