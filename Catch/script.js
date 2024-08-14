function showError(){
    return new Promise(
        (resolve,reject) =>{
            //Vamos a hacer algo que puede fallar
            reject(new Error("Ha ocurrido un error"))
        }
    );
}

showError()
.then(result => console.log(result))
.catch(err => {
    console.log(err);
    console.log(err.message);
})