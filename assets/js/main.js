// Rest parameters

function add(...args){
    let digits = 0;
    for(i = 0; i < args.length; i++){
        digits += args[i]
    }

    console.log(digits);
}

add(9,7)

// Spread operators

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
console.log(arr2);  //Output is [1,2,3,4,5,6]

let man = {
    utkarsh : {
        surname : "saxena",
        height : "5,10"
    },
}

// prototype and inheritance 

function Creature(ls){
    this.lifeSpan = ls;
}

Creature.prototype.breath = function(){
    console.log("Breathing");
};

let creature1 = new Creature(1000)

function Person(f, l, a){
    this.firstName = f;
    this.lastName = l;
    this.age = a;
}

Person.prototype.fullDetail = function(){
    console.log(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
}

Person.prototype.__proto__ = Object.create(Creature.prototype)

let person1 = new Person("Utkasrh", "Saxena", 17);
let person2 = new Person("Hemant", "Bharadwaj", 25);

console.log(person1);
console.log(person2.breath());
console.log(person2.fullDetail());

// Class and Objects 

class employes{
    constructor(n){
        this.lastName = n
    }

    helloWorld(){
        console.log("Hello World");
    }
}

let employe1 = new employes("Utkarsh")
employe1.helloWorld()

// kgkiggiugikgoih

// netflix paytm , bhim , phonepe , cash 
// user status 0 - No purchased
// invoice paid unpaid
class Payment{

    constructor(paymentType)
    {
         this.user = {
            user:0,
            invoice:0,
            paymentType:paymentType ? paymentType : null
         }
    }
    activateUser() // activate user 
    {
         this.user.user = 1
         this.user.invoice = 1
    }

    checkPayment() // activate user 
    {
        switch (this.user.paymentType) {
            case 'cash':
            case 'paytm':
            case 'phonepe':
                case 'bank':
                this.activateUser();
                break;
            default:
                this.paymentFailed();
                break;
        }
    }

    paymentFailed(){    
        return this.user;

    }
    userStatus()
    {
        return this.user
    }
}

let payment = new Payment('bank');
payment.checkPayment()
console.log(payment.userStatus())


// ##################################################################################################################******************************************************************************************************************

class emp {
    constructor(n){
        this.name = n;
    }

}

class mng extends emp {
    constructor(p, d){
        super(p);
        this.department = d;
    }

    info(){
        console.log(`I am ${this.name} from ${this.department} department`);
    }
}

let mng1 = new mng("Utkarsh", "Web Development");

console.log(mng1.info());

// Mixin
// It is use to adding the object data into class 

let methods = {
    sayHi(){
        console.log("Hi");
    },

    sayBye(){
        console.log("Bye");
    }
}

class user {
    constructor(){
        this.name = "Utkarsh"
    }
}

Object.assign(user.prototype, methods);

let user1 = new user();

console.log(user1.sayHi());

// Arrow function

document.addEventListener("keypress", (keypress) => {
    console.log(`${keypress.key} is pressed`);
});

// Callback function
// passing a function in function as a argument


// map function

let arr = [1,2,3,4];

let multiple = arr.map(val => val * 2 )

console.log(multiple);

// filter function 

let myArr = [2, 22, 4, 8, 33];

let result = myArr.filter(val => val > 10)

console.log(result);

// cookies 

document.cookie = "user=utkarsh; expires = Sat, 20 Mar 2022 12:00:00 UTC"

document.cookie = "user=utkarsh, hemant; expires = Sat, 20 Mar 2022 12:00:00 UTC"

// document.cookie = "user=utkarsh, hemant; expires = Tue, 1 Mar 2022 12:00:00 UTC" 

let x = document.cookie

console.log(x);

// local and session storage
// local storage

localStorage.setItem("Item", "milk");
localStorage.setItem("User", "Utkarsh");

localStorage.getItem('Item');
localStorage.removeItem("Item")

// session storage

sessionStorage.setItem("Item", "milk");
sessionStorage.setItem("User", "Utkarsh");

sessionStorage.getItem('Item');
sessionStorage.removeItem("Item")