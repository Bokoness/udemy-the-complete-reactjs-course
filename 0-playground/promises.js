const promise = new Promise((resolve, reject) => {
    // resolve ({
    //     name: "Ness",
    //     age: 32
    // });
    reject('Something went wrong!')
});
promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
});

