
let response:any ="42";

let numericLength : number = (response as string).length

type book ={

    name:string

}

let bookString = '{"name":"One Thing"}';

let bookObject =JSON.parse(bookString) as book

console.log(bookObject);

// Type Assertion : 
const inputElement = document.getElementById("username") as HTMLInputElement

let value: any 

value ="chai"
value=[1,2,3]
value =2.5
value.toUpperCase()

// unkown : Cannot use Directly First we have to check and implement thr operations
let newValue: unknown 

value ="chai"
value=[1,2,3]
value =2.5
if(typeof newValue==="string"){
    newValue.toUpperCase();
}


// Try Catch Block

try {
    
} catch (error ) {
    if(error instanceof Error){
        console.log(error.message);
        
    }
    console.log("Error",error);
    
    
    
}