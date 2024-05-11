// what is promises? // call back hell se bachne k liya we use promises.
// fetch(https://hidfiow.eu/rexct.....)
//if data found through API "data found=> right" or fullfilled
// if not => server error or reject
// when you use  fetch ,,,it returns promises (fulfilled or reject) sometime ongoing found.

// 90% we will consume the promises not created.
// for promises creation see the lecture of adv. js



//using promises

//    GET https://icanhazdadjoke.com/ // random jokes link

// step1:
// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');

// const generatesJokes = () => { // step3: now define the generatesjokes function

//     // step4:
//     const setHeader = {
//         headers: {      //use s
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/' , setHeader) //after calling using then ...'then' show get the response or not
//     .then((res) => res.json() ) //to get data JSON form.
//     .then( (data) => {  //step5: for getting data
//         jokes.innerHTML = data.joke //step:6 data.joke gives the joke and innerhtml gives the position where show the jokes,
//     }).catch((error) => { //catch use for if data not found
//         console.log(error);
//     })
// }
// // step2: fire event using jokebutton 
// jokeBtn.addEventListener('click', generatesJokes);
// generatesJokes(); //if anyone refresh the page atleast one joke will come by default calling the function







// using  async await es8 features

// if normal function how to use async
// async function generatesJokes(){ }


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generatesJokes = async () => { 

try{ //in the try main function written
    const setHeader = {
        headers: {     
            Accept : "application/json"
        }
    }
const res = await  fetch('https://icanhazdadjoke.com/' , setHeader) //promoses
const data = await res.json(); //data store
jokes.innerHTML = data.joke ;
}catch(error){
    console.log(`the error is ${error}`);
}
}
jokeBtn.addEventListener('click', generatesJokes);
generatesJokes();