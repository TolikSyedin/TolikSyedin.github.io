var app = require('../js/src/script.js');

describe("pow", function() {
  it("checking the Math.pow method", function() {
    
  	var result = app.pow(2,3)


    expect(result).toEqual(8);
  });
});

describe("multiply", function() {
  it("checking the multiply method", function() {
    
  	var result = app.multiply(8,3)


    expect(result).toEqual(24);
  });
});

describe("sum", function() {
  it("checking the sum method", function() {
    
  	var result = app.sum(2,5)


    expect(result).toEqual(7);
  });
});

describe("divide", function() {
  it("checking the divide method", function() {
    
  	var result = app.divide(4,4)


    expect(result).toEqual(1);
  });
});

