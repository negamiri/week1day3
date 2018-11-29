var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var arrayModified = [];
  array.forEach(function(word){
    arrayModified.push(callback(word));
  })
  console.log(arrayModified);
}



map(words, function(word) {
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
