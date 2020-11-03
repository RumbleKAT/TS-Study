import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
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
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
console.log(type);
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 50 });
// let docTwo = addUID('hello');
console.log(docOne);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docThree = {
    uid: 1,
    resouceName: ResourceType.AUTHOR,
    data: 'shaun'
};
const docFour = {
    uid: 2,
    resouceName: ResourceType.DIRECTOR,
    data: ['test', 'bread']
};
console.log(docThree, docFour);
//tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['rue', 25, true];
tup[0] = 'sone';
tup[1] = 100;
console.log(tup);
