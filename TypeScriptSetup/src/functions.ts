// Function : It is a block of code which performs a specific task

// Function Declaration
function makeChai(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type}`);
    
}
// Function Call
makeChai("Masala",2)
// Function with return type

function getChaiPrice():number{
    return 25
}

// Function with optional parameter and nullable return type
function makeOrder(order:string)
{
    if(!order) return null 
    return order
}
// Function with void return type
// void : it means function does not return any value
// example : function which just logs something on console
function logChai():void{
    console.log("Chai is ready ");
    
}
// Function with default parameter
// if parameter is not passed then default value will be used
function orderChai(type?:string)
{

}
// Function with parameter as object
// object parameter can have multiple properties

function orderChai1(type:string="Masala")
{

}
// Function with parameter as object with specific properties
// Here size can be either small or large
// sugar is number type 
// type is string type

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 10
}