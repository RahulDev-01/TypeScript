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
    if()
}