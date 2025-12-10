
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

let newValue: unknown 

value ="chai"
value=[1,2,3]
value =2.5
if(typeof newValue==="string"){
    newValue.toUpperCase();
}