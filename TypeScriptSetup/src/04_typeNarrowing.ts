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