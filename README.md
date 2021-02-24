# A wrapper in 1 line
Yes it works.
Requires nodejs, node-fetch ( `npm i node-fetch` )
# How to use

```js
const oneLiner = require('path/to/this/file');
process.env.KEY = 'api key here';
oneLiner.getPlayer({uuid:'uuid'}).then(console.log);
// you can also provide a different key to use
oneLiner.getPlayer({uuid:'uuid', key:'another api key against tos but shush'}).then(console.log);
```
