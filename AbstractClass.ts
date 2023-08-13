// Abstract class and interface
/*You should use implements when you want to specify a set of rules,
 or 'contract', that a class must follow, and use extends
  when you want to create a subclass that inherits from a base class.*/
abstract class TakePick{
     constructor(
        public cameraType:string,
        public filter:string
     ){}
    abstract needMee():boolean
    tellRealmaxTime():number{     // this can be overridden
        // complex calculations
        return 1
     }
}


class Insta extends TakePick{
    constructor(
        public cameraType:string,
        public filter:string
    ){
        super(cameraType, filter);
    }
    needMee(): boolean {     // since extends takePick and needMee is abstract we need to define it
        return true
    }
}


let facebook = new Insta("dslr" , "dawn light")

console.log(facebook.tellRealmaxTime())  // we can use the methods which are not defined in class Insta but defined in TakePick directly in facebook as its a object of Insta

export{}



/* we cannot create a Object for abstract class but we can extend it 
we can define variables and methods that can be made abstrace so that they
must be defined in the class that extends this class
and also use and override non abstract methods in abstract classes */