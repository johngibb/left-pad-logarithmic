var leftpad = require("./");
var old = require("left-pad");
var test = require("tape");

test('left pad', function (assert) {
  assert.plan(8);
  assert.strictEqual(leftpad('foo', 5), '  foo');
  assert.strictEqual(leftpad('foobar', 6), 'foobar');
  assert.strictEqual(leftpad(1, 2, 0), '01');
  assert.strictEqual(leftpad(1, 2, '-'), '-1');
  assert.strictEqual(leftpad('foo', 15), '            foo');
  assert.strictEqual(leftpad('foo', 16), '             foo');


  var startOld = new Date();
  var oldVal = old('foo', 10000000);
  var oldTime = new Date().getTime() - startOld;

  var startNew = new Date();
  var newVal = leftpad('foo', 10000000);
  var newTime = new Date().getTime() - startNew;

  assert.strictEqual(oldVal, newVal);
  assert.strictEqual(oldTime > newTime, true);
});
