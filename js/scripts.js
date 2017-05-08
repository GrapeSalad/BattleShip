function shipBaseNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}
function ship_engine() {
  this.Base = shipBaseNumber(1, 82);
  this.goLR = shipBaseNumber(0, 2);
  this.goUD = shipBaseNumber(0, 2);

}

var

function ship_move() {
  //the ship is 3 squares in length
  //determine if the ship moves vertically or horizontally
  var direction = shipBaseNumber(0,1);
  if(direction === 0){
    if(ship_engine.goLR === 0){

    }
  }

  }
}
