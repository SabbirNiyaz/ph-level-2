//! Static property (one memory location for all instances)

class Counter{

    static count: number = 0; //* Static value initialized to 0

    static increment(){
        return ++Counter.count;
    }

    decrement(){
        return --Counter.count;
    }
}

// const i1 = new Counter();
// const i2 = new Counter();
const d1 = new Counter();

// console.log(i1.increment());
// console.log(i1.increment()); 

console.log(d1.decrement());
console.log(d1.decrement()); 

console.log(Counter.increment()); 
console.log(Counter.increment()); 
console.log(Counter.increment()); 