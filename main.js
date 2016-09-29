/*

forEach

*/
var furniture = ['chair', 'desk', 'lamp'];

function forEach(array, callback){
  for(var i=0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

// forEach(furniture, function(item, index, array){
//   // var total = array.length;
//   console.log('Pick up from the store: ', index + 1 + '/' + array.length, item);
// });

furniture.forEach(function(item, index, array){
  // var total = array.length;
  console.log('Pick up from the store: ', index + 1 + '/' + array.length, item);
});

var people = ['Faith', 'Joel', 'Dan'];

people.forEach(function(person){
  console.log(person, 'is super cool!');
});

/*

map

*/

function map(array, callback){
  var newArray = [];

  for(var i=0; i < array.length; i++){
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}

var peoplePraise = map(people, function(person){
 return person + ' is super cool!';
});

console.log(peoplePraise);

var multipliedByThree = map([1, 2, 3], function(number){
  return '$' + number + '.00';
});

console.log(multipliedByThree);

var multiplyByFour = [1, 2, 3].map(function(number){
  return number * 4;
});

console.log(multiplyByFour);

/*

reduce

*/

function reduce(array, callback, initialValue){
  var accumulator = array[0];

  for(var i=1; i < array.length; i++){
    accumulator += callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

var sum = [1, 2, 3, 4].reduce(function(previousValue, currentValue, i, array){
    console.log('previousValue', previousValue);
    console.log('currentValue', currentValue);
    return previousValue + currentValue;
});

console.log(sum);
