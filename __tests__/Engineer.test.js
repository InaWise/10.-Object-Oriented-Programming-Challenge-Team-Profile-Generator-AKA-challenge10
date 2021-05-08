const Engineer = require('../lib/Engineer');

var engineer = new Engineer('Joe', 1, 'mock@fakemail.com', 'joegithub');

test('Check getName()', () => {
  expect(engineer.getName()).toBe('Joe');
});
test('Check getId()', () => {
  expect(engineer.getId()).toBe(1);
});
test('Check getEmail()', () => {
  expect(engineer.getEmail()).toBe('mock@fakemail.com');
});
test('Check getRole()', () => {
  expect(engineer.getRole()).toBe('Engineer');
});
test('Check getGithub()', () => {
  expect(engineer.getGithub()).toBe('joegithub');
});
