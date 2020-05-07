const { joinNames } = require("../src");

describe("joinNames", () => {
  const names1=[{name:'Bart'}, {name:'Lisa'}, {name:'Maggie'}];
  const names2=[{name:'John'}, {name:'Jack'}, {name:'Lisa'}, {name:'Alice'}]
  const names3=[{name:'Aly'}, {name:'Sam'},{name:'Jon'}, {name:'Spencer'}, {name:'Isabel'}, {name:'Natalie'}]
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(names1)).toEqual('Bart, Lisa & Maggie'); 
    expect(joinNames(names2)).toEqual('John, Jack, Lisa & Alice');
    expect(joinNames(names3)).toEqual('Aly, Sam, Jon, Spencer, Isabel & Natalie')
  });
});
