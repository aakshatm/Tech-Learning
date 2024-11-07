
// fetch('todos/todos.json').then((response) => {
//     console.log(response);
    
//     // response.json() returns promise // get us the data and parses it 
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected')
// })

// in fetch api : the promise is only rejected when we get some kind of network error it won't fail if we mistype the uri
// but the status code will not be 200

// next async and await

// this is async function : async function always return promises
const getTodos = async () => {
    const response = await fetch('todos/todos.json'); 
    if (response.status !== 200){
        throw new Error("can't fetch the data"); 
    }
    const data = await response.json(); 
    return data; 
};

getTodos().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err.message);
})

// throwing errors

