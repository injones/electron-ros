const five = require("johnny-five");
const Raspi = require('raspi-io');

//const board = new five.Board({  io: new Raspi() });
const board = new five.Board();
let LED = new five.LED('P1-7');
let isReady = false;

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
  console.log("Ready!");
  isReady = true;
  toggleLight(false);
});

function toggleLight(bool){
  if (isReady){
    if (bool){
      LED.on();
    } else {
      LED.off();
    }
  }
}

export default { toggleLight };
