# A wrapper in 1 line
Yes it works.
Requires nodejs (v14+), node-fetch ( `npm i node-fetch` )

# How to use

```js
const oneLiner = require('path/to/this/file');
process.env.KEY = 'api key here';
oneLiner.getPlayer({uuid:'uuid'}).then(console.log);
// you can also provide a different key to use
oneLiner.getPlayer({uuid:'uuid', key:'another api key against tos but shush'}).then(console.log);
```

Alternatively for the API Key, check out `dotenv` (npm package) for loading it from a file. You can also do `KEY=api-key node file.js` if it is more convenient for you.

