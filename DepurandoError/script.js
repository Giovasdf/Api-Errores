function trace(){
    try{
        throw new Error("Ha ocurrido un error, tu codigo esta malo");
    }catch(e){
        console.error(e.stack);
    }
}

function b(){
    trace();
}
function a(){
    b(1,"text",undefined,{},[]);
}

a();