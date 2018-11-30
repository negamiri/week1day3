var countdownGenerator = function (x) {
  // while x < number of invokes, return "T-minus" x
  // after x+1, return "Blast off!"
  // after, return "Rockets already gone, bub!"
  var timerCount = x + 1;

    return function(){

      if (timerCount > 1) {
        timerCount--;
        console.log(`T-minus ${timerCount}....`);
      } else if (timerCount === 1) {
        timerCount--;
        console.log("Blast Off!")
      } else {
        console.log ("Rockets already gone, bub!")
      }
    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


