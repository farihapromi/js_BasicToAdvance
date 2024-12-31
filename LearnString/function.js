let bioData={
    name:{
        firstName:'fariha',
        lastName:'promi'
    },
    age:25,
    getData:function(){
        console.log(`myname is ${this.name.firstName} and age is ${bioData.age}`)
    }

}
bioData.getData();