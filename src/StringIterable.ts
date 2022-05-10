export class StringIterable implements Iterable<string>{
    constructor(private strings: string[] = [], private currentIndex: number = 0){}
    [Symbol.iterator]():Iterator<string>{
        const that = this
        let currentIndex = that.currentIndex, length = that.strings.length

        const iterator: Iterator<string> = {
            next(): {value : any, done:boolean}{
                const value = currentIndex < length ? that.strings[currentIndex++]: undefined
                const done = value === undefined
                return  {value, done}
            }
        }
        return iterator
    }
}

// for(let value of new StringIterable(['hello','world','!']))
//     console.log(value);


export function* generator(){
    console.log('generator started....')
    let value = 1
    while(value < 4){
        yield value++;
    }
    console.log('generator finished....')
}

// for(let value of generator())
//     console.log(value);


export function* rangeGenerator(from:number, to:number){
    let value = from 
    while(value < to){
        yield value++;
    }
}

// let iterator = rangeGenerator(1,3+1);
// while(true){
//     const {value,done} = iterator.next();
//     if(done) break;
//     console.log(value);
// }

// for(let value of rangeGenerator(1,3+1))
//     console.log(value);

// function* gen12(){
//     yield 1
//     yield 2
// }

// function* gen12345(){
//     yield* gen12()
//     yield* [3,4]
//     yield 5
// }

// for(let value of gen12345()){
//     console.log(value);
// }

export function* gen(){
    let count = 5
    let select = 0;
    while(count--){
        select = yield `you select ${select}`
    }
}

export const random = (max:number, min = 0 ) => Math.round(Math.random() * (max-min)) + min;
 
const iter = gen();
while(true){
    const {value, done} = iter.next(random(10,1));
    if(done) break;
    console.log(value);
}
