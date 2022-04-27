type ResultType = [boolean, string];

const doSomething = (): ResultType =>{
    try{
        throw new Error(`Some error occurs....`);
    }catch(e:any){
        return [false, e.message]
    };
};

const [result, errorMessage] = doSomething();
console.log(result, errorMessage);