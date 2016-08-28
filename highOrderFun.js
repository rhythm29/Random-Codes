// filter : it creates a new array with elemets that pss the test provided by function


// function bigValue(num){
// 	return num >= 20;
// }
// var a = [24, 56,21,19,2,1].filter(bigValue);
// var a = [24, 56,21,19,2,1].filter(function (num){return num+20});
// console.log(a);



// forEach

// var numbers = [1, 2, 3, 4, 5], sum = 0;
// numbers.forEach(function(number) {
//   sum += number;
// });
// console.log(sum);



// map

// function addTwo(x){
// 	return x+2;
// }

// var a = [1 , 2, 3, 4].map(addTwo);
// console.log(a);



//filter example

var contacts = [
    {key: 1, name: "James Nelson", email: "james@jamesknelson.com"},
    {key: 2, name: "Bob", email:"dvfv"}
    ];
var a = contacts.filter(function(contact){return contact.email});
a = a.map(function(contact){return {key: contact.key}});
console.log(a);