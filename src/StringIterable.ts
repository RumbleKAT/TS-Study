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

export function* generator(){
    console.log('generator started....')
    let value = 1
    while(value < 4){
        yield value++;
    }
    console.log('generator finished....')
}

export function* rangeGenerator(from:number, to:number){
    let value = from 
    while(value < to){
        yield value++;
    }
}