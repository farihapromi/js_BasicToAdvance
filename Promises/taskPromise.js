// promise create
const ticket=new Promise(function(resolve,reject){
    const isBoarded=false;
    if(isBoarded){
        resolve('Succesful')
    }else{
        reject('ypur flight has been canceled')
    }
})
// promises uses
ticket.then((data)=>{
    // then accepted 
    console.log("callback accepted",data)
}).catch((data)=>{
    // catch rejected
    console.log('rejected',data)
}).finally((data)=>{
    // finallly alwyas executed inspite of accepted of rejected
    console.log("always excuted")
})