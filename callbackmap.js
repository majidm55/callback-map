var words = ["ground", "control", "to", "major", "tom"];

function map(arr, mapFunction){

const newArray = []; //empty array/

for(i = 0; i < arr.length; i++) { //looping through function
 var callback = mapFunction(arr[i]);
 newArray.push(callback);
 }
console.log(newArray);
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