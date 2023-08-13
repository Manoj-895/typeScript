// code for narrowing the type of variable

function detectType(val:number | string){
    if(typeof val === 'string')return val.toLowerCase()   // here you have narrowed to sting
    return val + 3
}

detectType("Babyaa")


function provideId(id:string | null){
    if(!id){
        return "No ID"
    }
    return id.toLowerCase()
}

/* type Gaurd
you use type of to check the type and narrow down the types
try to narrow as much as possible
*/

// in operator narrowing

type Fish = { swim:() => void};
type Bird = { fly:() => void}

interface User{
    name:string,
    email:string
}
interface Admin {
    name:string,
    email:string,
    isAdmin:boolean
}

function checkAdmin(val : User | Admin) : boolean{
    if("isAdmin" in val){               // we re using in operator to check the type
        return val.isAdmin
    }
    return false
}

// instance of comes with new keyword
function logValue(val : Date | string){
    if(val instanceof Date){                      // instance of used in new keyword
        console.log(val.toLocaleTimeString)
    }
    else{
        console.log(val ,'is a string')
    }
}

// type predicate
type FIsh = {swim : ()=>void}
type BIrd = {fly : ()=>void}

function isFish(val : FIsh | BIrd): val is FIsh{   // type cast the return value from boolean to FISh
    return (val as FIsh).swim !== undefined
}

function getFood(val : FIsh | BIrd){
    if(isFish(val)){
        console.log('fish food',val)
    }
    else{
        console.log('bird food',val)
    }
}

// discriminative Union

interface Circle {
    kind : "circle",
    radius : number
}

interface Square {
    kind : "square",
    side : number
}

interface Rectangle{
    kind : "rectangle",
    length : number,
    breadth : number
}


function fetchArea(val : Circle | Square | Rectangle){
    switch (val.kind){
    case("circle"):
         return 3.14 * val.radius * val.radius
    case("square"):
         return val.side * val.side
    case("rectangle"):
        return val.breadth * val.length
    default:
        let defaultArea :never = val   // should never run  thats why we write it , it will throw error if all are not covered 
        return defaultArea

    }
}

export{}