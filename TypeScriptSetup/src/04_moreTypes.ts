
let response:any ="42";

let numericLength : number = (response as string).length

type book ={

    name:string

}

let bookString = '{"name":"One Thing"}';

let bookObject =JSON.parse(bookString) as book

console.log(bookObject);

// Type Assertion : It is used to tell the compiler about the type of a variable

// DOM Manipulation

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


const data:unknown ="Chai aur unkown"
// As : Forcefully accept data
// 
const strData :string = data as string

// Never : Function that never returns a value
    // Examples : Function that throws an error or infinite loop

// Role type


type Role = 'admin'| "user" |"superAdmin" 
// void : I don't Care about the block of code
function redirectBasedOnRole(role:Role):void{
    if(role==="admin"){
        console.log("Redirecting to Admin Dashboard");
        return 
    }
    if(role==="user"){
        console.log("Redirecting to user dashboard");
        return
        
    }
    role;

}
// Never 
function neverReturn():never{
    while(true){

    }
}