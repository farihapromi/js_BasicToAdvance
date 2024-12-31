const jokes=document.querySelector('#joke');
const btnJoke=document.querySelector('#btnJoke');
const generatejokes=()=>{
    fetch('https://icanhazdadjoke.com')
    .then((res)=>{
        console.log(res.json());
    }).catch((error)=>{
        console.log(error);
    })
}