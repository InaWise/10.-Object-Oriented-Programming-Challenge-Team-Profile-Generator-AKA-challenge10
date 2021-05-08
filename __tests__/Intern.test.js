const Intern = require('../lib/Intern');

var intern = new Intern('Joe', 1, 'mock@fakemail.com', 'ccny');

test('Check getName()', () => {
  expect(intern.getName()).toBe('Joe');
});
test('Check getId()', () => {
  expect(intern.getId()).toBe(1);
});
test('Check getEmail()', () => {
  expect(intern.getEmail()).toBe('mock@fakemail.com');
});
test('Check getRole()', () => {
  expect(intern.getRole()).toBe('Intern');
});
test('Check getSchool()', () => {
  expect(intern.getSchool()).toBe('ccny');
});
