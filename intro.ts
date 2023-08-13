let user: string = "manoj"
console.log("hello world!",user);

let name: string = "Manoj"

name.replace("M","A")

console.log(name)


function getDevName (name: string = "bro",experience: number): string {
    return "dev is" + name + "." + experience
    // return 1
}

getDevName("mana",5)

const getYourIDs = (name: string): number=>{
   return 12
}

getYourIDs("na,na")

let allArr = ["thor" , "spiderman" , "iron man"]

allArr.map((a)=>{
    return a.slice()
})

const getError = (err :string): void =>{
    console.log(err)
    // return "err"
}

const getErrors = (err :string): never =>{
    throw new Error(err)
    console.log(err)
    // return "err"
}

const yourObj = ({name: string , data: number , isPaid: boolean}):{userID: number ,isPaid: boolean}=>{
       return {userID: 123 , isPaid:false}
}

// TYPE ALLIASIS
type myUsers = {
    name: string,
    id: number,
    isvalid: boolean
}

function isOurUser(user : myUsers): myUsers{
    return {id: user.id ,name :user.name, isvalid: true}
}

isOurUser({name: "mam" , id:1,isvalid:false})

// READ ONLY AND OPTIONAL 

type User = {
  readonly _id: string
  name?: string
  phone: number
}

const ReadOnlyuser : User = {
   _id :"1212" , phone:12121
}

// ReadOnlyuser._id  = "11322"
// using two types to create a new type 

type cardHolder = {
    cardHolder :string
}
type cardNumber = {
    cardNumber :number
}
type cardDetails = cardHolder & cardNumber & {
    cardcvv : number
}
let cardHolderDetails: cardDetails = {
    cardHolder : "prakash" , cardcvv : 121 , cardNumber : 21
}





















export {}