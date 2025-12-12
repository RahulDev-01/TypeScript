function getChai(kind:string | number){
if(typeof kind =='string'){
    return `making ${kind} chai...`;
}
return `Chai order : ${kind}`;
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai ${msg}`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size =="small"){
        return `small chai`
    }
    if(size =="medium" || "large"){
        return `make extra chai`
    }
    return `chai order #${size}`
     
}

class KulhadChai{
    serve(){
        return `Serving  Khulhad Chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving Cutting  Chai`
    }
}

function serve(chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder ={
    type :string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (

        typeof obj == 'object' &&
        obj != null &&
        typeof obj.type =="string" &&
        typeof obj.sugar =="number"
    )
}
function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving default chai : ${item}`       
}

// Type Narrowing with Discriminated Unions
// Defination : A discriminated union is a union type that uses a common property to differentiate between different types within the union.
// This common property is known as the "discriminant" or "tag".
// By checking the value of the discriminant, TypeScript can narrow down the type of the variable to a specific member of the union.
// This allows for more precise type checking and safer code when working with union types.
// Example:
// Defining the types with a common discriminant property 'type'
// Using Discriminated Unions to narrow down types
//  Defining the types with a common discriminant property 'type'
// Using Discriminated Unions to narrow down types


type MasalaChai ={
    type : "masala"
    spiceLevel : number
}
type GreenChai ={
    type : "green"
    flavor : number
}   
type ElderflowerChai ={
    type : "elderflower"
    floralNote : number
}

type ChaiTypes = MasalaChai | GreenChai | ElderflowerChai;
function prepareChai(chai: ChaiTypes){      
    switch(chai.type){
        case "masala":
            return `Preparing masala chai with spice level ${chai.spiceLevel}`;
        case "green":
            return `Preparing green chai with flavor level ${chai.flavor}`;
        case "elderflower":
            return `Preparing elderflower chai with floral note ${chai.floralNote}`;
    }   
}

// Example usages:
console.log(getChai("ginger"));
console.log(getChai(2));

function brew(order:MasalaChai | GreenChai){
    if("spiceLevel" in order){
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }   
    return `Brewing green chai with flavor level ${order.flavor}`;
}

// Unknown : 

function isStringArray(arr:unknown) : arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}