let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`)
}

greet('song','good')

let calc : (a: number, b: number ,c:string) => number;

calc = (numOne : number, numTwo : number, action : string): number => {
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo;
    }
}

let logDetails: (obj:{name:string,age: number}) => void;
type person = {name:string,age: number};
logDetails = (ninja: person)=>{
    console.log(ninja.name + " " + ninja.age);
}

logDetails({name:'Song',age :10});