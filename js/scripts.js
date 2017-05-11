$(document).ready(function(){
  var shipCoordinates = USSJhin.shipPosition(USSJhin);
  // for(i=0; i<3; i++){
  //   console.log(shipCoordinates[i]);
  // }
  console.log(shipCoordinates);
  $("td.operator").click(function(){
    var bombLocation =parseInt($(this).text());
    console.log(bombLocation);

    if(bombLocation === shipCoordinates[0] || bombLocation === shipCoordinates[1] || bombLocation === shipCoordinates[2]){
      alert("You defeated the Navy!");
    }
    else{
      alert("You missed! The ship is still out there.");
    }
  });
});

//ship constructor
function shipEngine() {
  this.Coordinates = [];
  this.VerticalException = [10, 19, 28, 37, 46, 55, 64, 18, 27, 36, 45, 54, 63, 72];
}
// Create a new ship object
var USSJhin = new shipEngine();
//method to generate random numbers
shipEngine.prototype.randomNumberGenerator = function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}


//USSJhin(USSJhin.randomNumberGenerator(1,82),USSJhin.randomNumberGenerator(0,2), USSJhin.randomNumberGenerator(0,2));

shipEngine.prototype.shipPosition = function(ship){
  //the ship is 3 squares in length
  var centerCoordinate = ship.randomNumberGenerator(1, 82);
  console.log(centerCoordinate);
  function isBorderColumn(centerCoordinate){
    var bool = false;
    for(i=0; i<ship.VerticalException.length; i++){
      if(centerCoordinate === ship.VerticalException[i]){
        bool = true;
      }
      else {
        bool = false;
      }
    }
    return bool;
  }
  console.log(isBorderColumn(centerCoordinate));
  //Not including corners
  if(isBorderColumn(centerCoordinate) === false){
    if(centerCoordinate === 1 || centerCoordinate === 9 || centerCoordinate === 73 || centerCoordinate === 81){
      location.reload();
    }
    //if ship is on border rows, it can only arrange horizontally
    else if(((2<= centerCoordinate) && (centerCoordinate <= 8)) || ((74<= centerCoordinate) && (centerCoordinate <= 80))){
      ship.Coordinates = [centerCoordinate-1, centerCoordinate, centerCoordinate + 1];
      console.log(ship.Coordinates);
    }
    // If the center coordinate of the ship is on the inner square, it can arrange either horizontally or vertically.
    else{
      var direction = ship.randomNumberGenerator(0,2);
      console.log(direction);
      // direction 0 = horizontal, direction 1 = vertical
      if(direction === 0){
        console.log("horizontal");

        ship.Coordinates = [centerCoordinate-1, centerCoordinate, centerCoordinate + 1];
      }
      else{
        console.log("vertical");
        ship.Coordinates = [centerCoordinate-9, centerCoordinate, centerCoordinate + 9];
      }
    }
  }
  else if(isBorderColumn(centerCoordinate) === true){
    ship.Coordinates = [centerCoordinate-9, centerCoordinate, centerCoordinate + 9];
    console.log("Is an exception: " + ship.Coordinates);
  }
  return ship.Coordinates;
}
