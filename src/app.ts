import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//interfaces
interface IsPerson{
    name : string;
    age : number;
    speak(a: string): void;
    spend(a: number): number;
}

const me : IsPerson = {
    name : 'shaun',
    age : 30,
    speak(text : string):void {
        console.log(text);
    },
    spend(amount : number) : number{
        return amount;
    }
};

// const greetPerson = (person : IsPerson) =>{
//     console.log('hello ', person.name)
// }

// console.log(me)
// greetPerson(me);


// import {Invoice} from './classes/Invoice.js'; //read js file 
// import {Payment} from './classes/Payments.js';
// import {HasFormatter} from './interfaces/HasFormatter.js';

// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new Invoice('yoshi','web work',250);
// docTwo = new Invoice('mario', 'plumbing work', 200);

// let docs: HasFormatter [] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const inVoice = new Invoice('mario', 'work on the mario',250);
// const inVTwo = new Invoice('luigi','work on the mario',200);

// let invoices : Invoice[] = [];
// invoices.push(inVoice);
// invoices.push(inVTwo);

// invoices.forEach(inv =>{
//     console.log(inv.format());
// })

// console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
console.log(type);


const addUID = <T extends {name: string}>(obj:T) =>{
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 50});
// let docTwo = addUID('hello');

console.log(docOne);

enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, PERSON
};



interface Resource<T>{
    uid: number;
    resouceName : ResourceType;
    data : T;
}

const docThree : Resource<string> ={
    uid : 1,
    resouceName : ResourceType.AUTHOR,
    data : 'shaun'
}

const docFour : Resource<string []> = {
    uid : 2,
    resouceName : ResourceType.DIRECTOR,
    data : ['test', 'bread']
}
console.log(docThree, docFour)

//tuples

let arr = ['ryu',25,true];
arr[0] = false;
arr[1] = 'yoshi'
arr = [30,false,'yoshi'];

let tup: [string, number, boolean] = ['rue',25,true];
tup[0] = 'sone';
tup[1] = 100;

console.log(tup)








