abstract class AbstractPerson5{
    abstract name : string
    constructor (public age? : number){}
}

class Person5 extends AbstractPerson5{
    constructor(public name: string, age? : number){
        super(age);
    }
}

let jack5: Person5 = new Person5('song',10);
console.log(jack5);
console.log(jack5.age);
console.log(jack5.name);

