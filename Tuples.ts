
// declared a tuple which can contain only two elements which are string and numbers in same order 
let x : [string , number ] = ["manaya" , 1]

x = ["onne" , 2] // correct 
// x = [2 , "manaya" ,]   // error since order is messed up


// tuple disadvantages you can push to type like 

x.push("3")

type users = [string , number ,boolean]

let b : users = ["mam ", 1, false]

console.log(x ,b)
export {}



