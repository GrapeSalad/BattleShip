$(document).ready(function(){

  var shipCoordinates = USSJhin.shipPosition(USSJhin);
  var shipCoordinates1 = USSPudge.shipPosition(USSPudge);

  $("td.operator").click(function(){
    var bombLocation = parseInt($(this)[0].id);
//FINDING SHIP ONE
    if(bombLocation === shipCoordinates[0] || bombLocation === shipCoordinates[1] || bombLocation === shipCoordinates[2]){
      if(bombLocation === shipCoordinates[0]){
        $(this).addClass("hitFront");
      }else if(bombLocation === shipCoordinates[1]){
        $(this).addClass("hitBody");
      }else {
        $(this).addClass("hitEnd");
      }
    }
    else{
      $(this).addClass("hitFail");
    }
//FINDING SHIP TWO
    if(bombLocation === shipCoordinates1[0] || bombLocation === shipCoordinates1[1] || bombLocation === shipCoordinates1[2]){
      if(bombLocation === shipCoordinates1[0]){
        $(this).addClass("hitFront");
      }else if(bombLocation === shipCoordinates1[1]){
        $(this).addClass("hitBody");
      }else {
        $(this).addClass("hitEnd");
      }
    }
    else{
      $(this).addClass("hitFail");
    }
  });

  $("button#resetButton").click(function() {
    location.reload();
  });
});

//ship constructor
function shipEngine() {
  this.Coordinates = [];
  this.VerticalException = [10, 19, 28, 37, 46, 55, 64, 18, 27, 36, 45, 54, 63, 72];
}
// Create a new ship object
var USSJhin = new shipEngine();
var USSPudge = new shipEngine();
//method to generate random numbers
shipEngine.prototype.randomNumberGenerator = function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}

shipEngine.prototype.shipPosition = function(ship){
  //the ship is 3 squares in length
  var centerCoordinate = ship.randomNumberGenerator(1, 82);
  function isBorderColumn(centerCoordinate){
    var bool = false;
    for(i=0; i<ship.VerticalException.length; i++){
      var borderCell = ship.VerticalException[i];
      if(centerCoordinate === ship.VerticalException[i]){
        bool = true;
        break;
      }
      else {
        bool = false;
      }
    }
    return bool;
  }
  //Not including corners
  if(isBorderColumn(centerCoordinate) === false){
    if(centerCoordinate === 1 || centerCoordinate === 9 || centerCoordinate === 73 || centerCoordinate === 81){
      location.reload();
    }
    //if ship is on border rows, it can only arrange horizontally
    else if(((2<= centerCoordinate) && (centerCoordinate <= 8)) || ((74<= centerCoordinate) && (centerCoordinate <= 80))){
      ship.Coordinates = [centerCoordinate-1, centerCoordinate, centerCoordinate + 1];
    }
    // If the center coordinate of the ship is on the inner square, it can arrange either horizontally or vertically.
    else{
      var direction = ship.randomNumberGenerator(0,2);
      // direction 0 = horizontal, direction 1 = vertical
      if(direction === 0){

        ship.Coordinates = [centerCoordinate-1, centerCoordinate, centerCoordinate + 1];
      }
      else{
        ship.Coordinates = [centerCoordinate-9, centerCoordinate, centerCoordinate + 9];
      }
    }
  }
  else if(isBorderColumn(centerCoordinate) === true){
    ship.Coordinates = [centerCoordinate-9, centerCoordinate, centerCoordinate + 9];
  }
  return ship.Coordinates;
}
