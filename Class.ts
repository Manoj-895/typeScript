class User {
    name: string
    cellNumber: number  // these will be automatically public
    readonly mailStr : string = "@end.com"   // if made private you cannot use anywhere 
    constructor(name: string, cellNumber: number) {
        this.cellNumber = cellNumber;
        this.name = name;
    }
}


let Kitty = new User('Krishna', 98959794936);
console.log(Kitty.mailStr)         // read only is fine 
//Kitty.mailStr = "@ended.com" // cannot since read only

class User2 {
    private courseCount:number = 1
    protected giveAccesstoSubUser: boolean = true
    constructor(
        public name: string,
        public cellNumber: number,
        private UserId: number,
    ) { }    // easy way of writing the class condtructure without using  this keyword

        private SecretInfo():string{
            return `this.UserId`
        }

        get getApplemail(): string{
            return `${this.name+"_"+this.cellNumber}@apple.com`;
        }

        get getCourseCount():number{
            return this.courseCount;
        }

        set setCourseCount(count){   // you cannot describe type for setter like setCourseCount():number
            this.courseCount += count;
        }
}

class SubUser extends User2 {
    isShared: boolean = false
    AllowAccess(): boolean{
        return this.giveAccesstoSubUser   // since its protected we are able to access in inherited class Private declarations are not accessible 
    }
}



let kitty2 = new User2("Krishna", 989597949 , 12)
//console.log(kitty2.UserId )
// kitty2.SecretInfo   // cannot access private methods

// getters and setters

export{}
