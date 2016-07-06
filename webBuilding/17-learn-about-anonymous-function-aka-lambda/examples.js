// anonymous / lambda function
let myArray = [ 'a', 'b', 'c' ];
myArray.forEach(()=> {console.log("hello!"); });
myArray.forEach((value)=> {console.log("my value => " + value); });

let ages = [ 20, 30, 35, 40, 55 ];
let filteredAge = ages.filter((age) => { return (age > 35) ? true : false });
console.log(filteredAge);
