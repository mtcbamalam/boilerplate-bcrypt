'use strict';
const express     = require('express');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
//START_ASYNC -do not remove notes, place code between correct pair of notes.
//bcrypt.hash(myPlaintextPassword, saltRounds, (_err, hash) => {
    
  //  bcrypt.compare(myPlaintextPassword, hash, (_err, res) => {
      
    //});
  //});
 
//END_ASYNC

//START_SYNC

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC



app.listen(process.env.PORT || 3000, () => {});

