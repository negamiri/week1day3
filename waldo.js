//Original

/*
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(num) {
  console.log("Found Waldo at index " + num);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//For each activity

function findWaldo(arr, found) {
  arr.forEach(function (names) {
    if (names === "Waldo") {
      found();   // execute callback
    }
  }
  )
}

function actionWhenFound() {
  console.log("Found Waldo!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);