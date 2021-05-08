const Employee = require('../lib/Employee');

var employee = new Employee('Joe', 1, 'mock@fakemail.com');

test('Check getName()', () => {
  expect(employee.getName()).toBe('Joe');
});
test('Check getId()', () => {
  expect(employee.getId()).toBe(1);
});
test('Check getEmail()', () => {
  expect(employee.getEmail()).toBe('mock@fakemail.com');
});
test('Check getRole()', () => {
  expect(employee.getRole()).toBe('Employee');
});
