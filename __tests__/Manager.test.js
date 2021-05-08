const Manager = require('../lib/Manager');

var manager = new Manager('Joe', 1, 'mock@fakemail.com', 450);

test('Check getName()', () => {
  expect(manager.getName()).toBe('Joe');
});
test('Check getId()', () => {
  expect(manager.getId()).toBe(1);
});
test('Check getEmail()', () => {
  expect(manager.getEmail()).toBe('mock@fakemail.com');
});
test('Check getRole()', () => {
  expect(manager.getRole()).toBe('Manager');
});
test('Check officeNumber', () => {
  expect(manager.officeNumber).toBe(450);
});
