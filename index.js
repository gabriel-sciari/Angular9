// obj1 - ref type
let obj1={
    "name":"bob",
    "age":12
};

// num1 - val type
let num1=9;


let obj2=obj1;
let num2=num1;


console.log("obj1",obj1);   //--> obj1 { name: 'bob', age: 12 }
console.log("obj2",obj2);   //--> obj2 { name: 'bob', age: 12 }

console.log("num1",num1);   //--> num1 9
console.log("num2",num2);   //--> num2 9


obj1.name="alice";
num1=11;

console.log("obj1",obj1);   //--> obj1 { name: 'alice', age: 12 }
console.log("obj2",obj2);   //--> obj2 { name: 'alice', age: 12 }

console.log("num1",num1);   //--> num1 11
console.log("num2",num2);   //--> num2 9