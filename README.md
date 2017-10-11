# test  
mocha test.js

# how to use  
```JavaScript
// node.js
var fixWidth = require('numberfixwidth')
fixWidth(2017,2) //=> "17"
fixWidth(8,2) //=> "08"
```

```JavaScript
// browser copy the function 'numberfixwidth' anywhere you want
// or 👇
<script src="dist/numberfixwidth.js"></script>
var fixWidth = require('numberfixwidth')
```