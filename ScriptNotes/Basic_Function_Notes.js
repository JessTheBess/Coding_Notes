//--//--//--//--//
const; //for a valueable/function that will not be afected by hoist and stay where it is like a "weight" or a "pin marker"
//--//
const greet = function(){
};

greet();//calling function

//--//

function; //is just to declare one and it will be affected by hoist
--
function greet(){
};

greet();//calling the function

//--//--//--//--//

//const function depiction
const greet = function(name, time){
    console.log(`good ${time} ${name}`);
};

//call needs to match order declared in the function line(10)
greet('name', 'time');

//--//

//function depiction
function greet(name, time){
    console.log(`good ${time} ${name}`);
};

greet('name', 'time');

//--//

const greet = function(name = 'jess', time = 'day'){
    console.log(`good ${time} ${name}`);
};

greet();//this will work as a basic call
greet('matt', 'night');//this will overwrite the manual input in line(39)