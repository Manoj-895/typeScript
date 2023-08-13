const score: Array<number>=[]
const names: Array<string>=[]



function identity (val : boolean|number): boolean |number {
     return val
}

function identityTwo (val : any): any{
    return val
}


function identityThree <Type> (val : Type):Type{
    return val
}

// Short cut
function identityFour <T> (val : T):T{
    return val
}
identityThree("3")  // to pass built in data types you can call directly


interface Bootle {
    name : string,
    type : string
}

let bootle1: Bootle = {name:"zero" , type:"gym"}

identityFour<Bootle>({name:"one", type:"gym"}) 
identityFour(bootle1)



// generics for arrays 

function getSearchedProduct <T>(product : T[]): T {    // syntax to define generics to pass array 
    return product[3]
}

// in arrow functions

const getSearchedProduct2 = <T,>(products :T[]): T => { // comma is optional used in react to differentiate from jsx in react
      return products[0]
}




getSearchedProduct2([1,2,3,4])


interface Product{
    name: string,
    price:number,
}



function anotherFunction<T , U extends Product>(val1 :T , val2 :U):object{  // you can directly do like Product without extends
    return {
        val1,val2
    }
}

anotherFunction(true , {name:"rope",price:20})

// classes
interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class SellCourse <T> {
    constructor(
        public cart: T[]
    ){}
     addtocart(product:T){
        this.cart.push(product)
     }
}

let product:Quiz ={
    name:"js",
    type:"cs"
}

let xCourse = new SellCourse<Quiz>([product])

export {}