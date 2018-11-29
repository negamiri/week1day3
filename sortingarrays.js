// Basic sorting


var array = [10, 2, 5, 1, 9];
var arraySorted = array.sort(function(a,b){
  return a-b;
});

console.log(arraySorted);


// Advanced sorting

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(studentA, studentB) {
  if (studentA.name < studentB.name){
    return -1;
  } if (studentA.name > studentB.name) {
    return 1;
  }
  if (studentA.name === studentB.name){
    if (studentA.age > studentB.age){
      return -1;
    } if (studentA.age < studentB.age){
      return 1;
    }
  }
  return 0;
})

console.log(students);




