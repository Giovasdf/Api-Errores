const showError = () => {
    try{
        throw 'Ha ocurrido un error';
    }catch(e){
        console.log(e);
    }
}

showError();