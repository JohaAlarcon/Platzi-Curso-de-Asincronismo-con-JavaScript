const somethingWllHappen = () => {
    return new Promise((resolve, reject)=> {
        if (true){
        resolve ('Hey!!!');
        }else {
            reject ('Whooooops!');
        }
    });

};

somethingWllHappen ()
.then(Response => console.log(Response))
.catch(err => console.log(err));

const somethingWllHappen2 = () => {
    return new Promise ((resolve, reject) => {
    if (true){
        setTimeout(() => {
            resolve('true');
        }, 3000)

    }else {
        const error = new Error ('Whooops');
        reject(error);
    }
});

}

somethingWllHappen2 ()
.then(Response=>console.log(Response))
.catch(err => console.error(err));

Promise.all([somethingWllHappen(), somethingWllHappen2()])
.then(Response =>{
    console.log('array of reults', Response)
})

.catch(err => {
    console.error(err);
})