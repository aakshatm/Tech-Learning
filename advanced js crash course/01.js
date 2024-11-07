// concept of scope
// block scope : { }
// function scope: 
// global scope 


// nested function scope

let a = 10; 
function outer(){
    let b = 20; 
    function inner(){
        let c = 30; 
        console.log(a, b, c);
    }
    inner()
}

outer(); 

