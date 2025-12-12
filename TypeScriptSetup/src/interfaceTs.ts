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

// interface 
interface CupSize {
    size:"small"|"large" 
}

class Chai implements CupSize{
 size: "small" | "large" ='large';
}