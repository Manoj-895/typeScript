type User ={
    useName : string,
    id : number,
}

type AdminUser = {
    adminName : string,
    id : number
}

let OurUser: User | AdminUser

OurUser = {useName : "anjan" , id: 12}
OurUser = {adminName : "amar" , id : 12}

function getNumber (num : number | string){
    return num.toLocaleString()
}
getNumber(3)
getNumber("4")


// array Ts

let arr:number[] = [1,2,3,4]

let arr1: number[] | string[] = [1,2,3,4]
arr1 = ["a ", "b", "c", "d"]

let arr2 : (number | string)[] =[1,2,'3','4']


// only these values 
let seatAllotment: "alloted" | "not_allocated"

// seatAllotment = "good" error 

















export {}