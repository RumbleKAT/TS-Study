import { makePerson, Person } from "./person/Person";
import IPerson from './person/IPerson';
import Chance from 'chance';
import * as R from 'ramda';


const chance = new Chance();

let persons : IPerson[] = R.range(0,2).map((n:number)=>{
    return new Person(chance.name(), chance.age())
});

console.log(persons);

/*
const testMakePerson = () : void =>{
    let jane : IPerson = makePerson('jane');
    let jack : IPerson = new Person('jack');
    console.log(jane,jack);
}
testMakePerson();
*/