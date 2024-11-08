// function currying 

// transform a function with multiple arguments  into a sequence of nesting fuctions that takes one argument at a time

// f(a, b, c) -> f(a), f(b), f(c)


function sum(a, b, c){
    return a + b + c
}

console.log(sum(2, 3, 5))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));