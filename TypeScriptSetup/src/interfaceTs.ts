type chaiOrder={

    type:string;
    sugar:number;strong:boolean
    
    }

function makeChai(order:{type:string; sugar:number;strong:boolean}){
    console.log(order);
    
}


function serveChai(order:chaiOrder){
    console.log(order);
    
}
// Interface -> interface Name{ ...Code}
interface TeaRecipe {
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe {
    water=100;
    milk=50;
}

// Interface in Strings

interface CupSize {
    size:"small"|"large" 
}

class Chai implements CupSize{
 size: "small" | "large" ='large';
}

type Response ={ok:true} | {ok:false}

// class myRes implements  Response{
//     ok: boolean=true;
// }

// | -> Union 
type TeaType ="masla"|"ginger"|"lemon"

function orderChai(t:TeaType){
    console.log(t);
    
}
// & -> Intersection  
type BaseChai ={teaLeaves:number}
type Extra={masala:number}

// Intersection & 
type MasalaChaiType = BaseChai & Extra

const cup : MasalaChaiType={
    teaLeaves:5,
    masala:10
}
// Optional Property  ?
type User ={
    username:string;
    bio?:string;
}
const user1:User={
    username:"Rahul"
}
const user2:User={
    username:"Rahul",
    bio:"I love chai"
}

type Config={
    readonly appName:string;
    version:number;
}

const config:Config={
    appName:"ChaiApp",
    version:1.0
}