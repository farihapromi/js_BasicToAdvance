var friends=['promi','nisa','monika','maisha']
//for in index num
for(let element in friends){
    // console.log(element)
}
//for of value print kore
for(let element of friends){
    // console.log(element)
}
//for Each
//calls a function for each element in the array
// forEach diye amra oi protekkta element ,index num,array sob gulo print korate pari
//comibindaiton of for in and for of
friends.forEach(function(element,index,array){
    console.log(element+ " " + "index:" ,index)
})