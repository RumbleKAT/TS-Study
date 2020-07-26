import { makePerson, Person } from "./person/Person";
import IPerson from './person/IPerson';
import IPerson2 from './person/IPerson2';
import APerson from './person/Person5';
import INameable from './INameable';

import Chance from 'chance';
import * as R from 'ramda';


// const chance = new Chance();

// let persons : IPerson[] = R.range(0,2).map((n:number)=>{
//     return new Person(chance.name(), chance.age())
// });

// console.log(persons);

//IPerson2 Interface 적용

class Person5 extends APerson{
    constructor(public name : string, age? :number){
        super(age)
    }
}

let jack5 : Person5 = new Person5('Jack',32);
console.log(jack5);

let {name, age} = jack5;
console.log(name);

//전개 연산자
let part1 = {name : "jack"} , part2 = {age: 22}, part3 = {city : 'Seoul', country : 'Kr'};
let merged = {...part1, ...part2, ...part3};
console.log(merged);

//타입 강제 선언
let obj : object = {name : 'jack'};

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
console.log(name1 , name2);