
// Union | -> both
let sub : number | string ='1'
// In Production
let apiRequestStatus :'pending' |'sucess' |'error' ='pending'

apiRequestStatus = "sucess"

let airlineSeat :'aisle' |'window' | 'middle' ='middle'

airlineSeat='aisle'

const orders =['12','20','28','42']

let currentorder : string | undefined ;

for(let order of orders){
    if(order=='28'){
        currentorder =  order
        break
    }
}

console.log(currentorder);
