function getCheese(){
    // promises pass
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese='here is cheese';
            console.log(cheese);
            resolve(cheese);
        },2000)
    })

    }
    
    function makeDough(cheese){
        // promises pass
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const dough='here is dough of pizza';
                console.log(dough);
                resolve(dough);
            },2000)
        })
    
        }

        function bakePizza(dough){
            // promises pass
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const pizza='here is pizza';
                    console.log(pizza);
                    resolve(pizza);
                },2000)
            })
        
            }

            // asynchronous function using 
            async function orderPizza(){
                try{

                
                const cheese=await getCheese();
                const dough=await makeDough(cheese);
                const pizza=await bakePizza(dough);
                console.log('ur pizza is ready',pizza);
                }catch(err){
                    console.log('error occured',err)
                }
            }
orderPizza();

// getCheese().then((cheese)=>{
//     console.log('ohh finally you got cheese',cheese);
//      return makeDough(cheese)
// }).then((dough)=>{
//     console.log('got dough',dough);
//     return bakePizza(dough)
// }).then((pizza)=>{
//     console.log('your is pizza ready',pizza);
// }).catch((data)=>{
//     console.log('error occured',data)
// }).finally(()=>{
//     console.log('process ended')
// })
                   
        