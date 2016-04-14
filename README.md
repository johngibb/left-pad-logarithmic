## left-pad

String left pad.

This behaves exactly like the famed left-pad, but it runs in O(lg n). Useful for left-padding in larger, web-scale situations.

## Install

```bash
$ npm install left-pad-logarithmic
```

## Usage

```js
leftpad = require('left-pad-logarithmic')

leftpad('foo', 5)
// => "  foo"

leftpad('foobar', 6)
// => "foobar"

leftpad(1, 2, 0)
// => "01"
```

leftpad('foo', 15)
// => "            foo"