interface User {
    readonly userId : number
    name : string,
    date : Date,
    age : number
    isavailable : boolean,
    isLinkedinUser?: boolean
    checkElihibility() : boolean
}

let manaya : User = {
    userId : 1,
    name : 'Manaya',
    date : new Date('1999'),
    age : 22,
    isavailable : true,
    checkElihibility : ()=>{
        return true
    },
    checkIfworking : ()=>{
        return true
   }

}

// adding more ferature to User

interface User {
   checkIfworking(): boolean   // called reopening of interface
}

// extendes in interface 

interface Admin extends User {
    withAdminId? : 'admin1' | 'admin2' | 'admin3'
}

// let teja :Admin = {

// }


console.log(manaya.checkElihibility , manaya.checkIfworking)



interface Camera {
       cameraMode: string,
       filter: string,
       burst: number
}

class Insta implements Camera {     // when a class implements Camera interface it should have all the variables and methods in interface 
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
    }
}

interface Story {
    getStory():string
}

class Youtube implements Camera ,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoLength: number  // you can add more to it but you must have those defined in interface
    ){
    }
     
    getStory(): string {
        return "youtube Story"   // since youtube implements Story it should have this method to be defined
    }
}



export {}