'use strict';
const express     = require('express');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (_err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (_err, res) => {
      console.log(res);
    });
  });
 
//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var res = bcrypt.compareSync(myPlaintextPassword, hash);

//END_SYNC




























app.listen(process.env.PORT || 3000, () => {});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});

function newFunction() {
  let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  console.log(hash);
  console.log(results);
  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  console.log(hash);

  var hash = bcrypt.hashSync(myPlaintextPassword, hash);
  console.log(results);
}

