'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (_err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (_err, res) => {
      console.log(res);
    });
  });

//END_ASYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
 console.log(hash);

var hash = bcrypt.hashSync(myPlaintextPassword, hash);
console.log(result);
//START_SYNC

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);

//END_SYNC




























app.listen(process.env.PORT || 3000, () => {});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});

