const { getEmployerRole } = require("../src");
const employees = [{
  name: 'Satti',
  role: 'Developer'
}, {
  name: 'Jenny',
  role: 'Sales Associate'
}, {
  name: 'Javid',
  role: 'Human Recommended Reading Assistant'
}];

const employees2 = [{
  name: 'Andy',
  role: 'Handler'
}, {
  name: 'Jon',
  role:'Boss'
},{
  name:'Aly',
  role: 'Assistant'
}, {
  name: 'Joseph',
  role:'Teacher'
}, {
  name:'Andrew',
  role:'Assistant'
}];

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', employees)).toEqual('Human Recommended Reading Assistant');
    expect(getEmployerRole('Jon', employees2)).toEqual('Boss');
    expect(getEmployerRole('Jenny', employees)).toEqual('Sales Associate')
  });
});
