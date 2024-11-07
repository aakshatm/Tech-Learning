// http request
// data base blog post comment user data (which is stored on other server's database)
// api endpoint (url endpoint that other servder exposes to use)

// http request
// response (data)

// we can even make our own apis

// json data format we get in response of the request
// we can get data using fetch api 
// https://jsonplaceholder.typicode.com/  (for fake apis)

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => { // this is real async operation here na 
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200){ // when the data is successfully brought
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if (request.readyState === 4){
                reject('error getting resource');
            }
        });

        // using server api
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');


        // direclty local json serve kar rhe
        // request.open('GET', 'todos.json');

        request.open('GET', resource);

        request.send();
    })

    

}

// always do the error first and then data its just a convention

/*
getTodos('todos/todos.json', (err, data) => {
    console.log('callback fired');
    if (err){
        console.log(err);
    }else{
        console.log(data);
        getTodos('todos/todos1.json', (err, data) => {
            console.log(data);
            getTodos('todos/todos2.json', (err, data) => {
                console.log(data);
            })
        })
    }
}); 

*/

// callback hell : this problem arrises when we want to like get data from service 1 and after that from service 2 and so on ..

// callback hell solution : promises 
const getSomething = () => {


    return new Promise((resolve, reject) => {
        // network request fetch something 

        resolve('some data');
        // reject('some error');
    });
}

// either it is resolved or rejected
// success after network request : resolve
// else : reject
// resolve and reject are built into promise api 


// this will return a new promise
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });


// .then mei jo first function denge voh invoke hoga instead of resolve 

// .then(first fn, second fn): 
// first fn : resolve
// second fn: reject


//another method
// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// getTodos('todos/todos.json').then((data) => {
//     console.log('promise resolved', data);
// }).catch((err) => {
//     console.log('promise reject')
// }) 


// chaining promises 
// so we don't have to deal with messy callback hells

getTodos('todos/todos.json').then((data) => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/todos1.json');
}).then((data) => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/todos2.json');
}).then((data) => {
    console.log('promise 3 resolved', data);
}).catch((err) => {
    console.log('promise reject')
}) 


// this one catch in the end will act as rejected function for all the promises in the chain 

// and also if there is any error in any resolver method error it will fall back to catch :))



// till now we have used the XMLHTTPRequest object

// now there is a easier way also avaiable

// using fetch API

// continueed in fetchApI.js




// json : strings which looks like javascript object
// our job is to convert it to real js object 

// we can create our own json 
