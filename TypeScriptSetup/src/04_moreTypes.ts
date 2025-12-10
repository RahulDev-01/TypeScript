
let response:any ="42";

let numericLength : number = (response as string).length

type book ={

    name:string

}

let bookString = '{"name":"One Thing"}';

let bookObject =JSON.parse(bookString) as book

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement