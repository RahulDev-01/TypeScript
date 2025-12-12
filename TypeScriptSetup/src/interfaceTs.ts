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

type TeaRecipe ={
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe {
    water=100;
    milk=50;
}