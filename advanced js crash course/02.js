// closure 

function outer(){
    let counter = 0; 
    function inner(){
        counter++; 
        console.log(counter);
    }
    return inner; 
}

const fn = outer();
fn();
fn();

// the combination of the function and its scope chain is called closure

