function startLights () {
    let green=document.querySelector("#green");
    let red=document.querySelector("#red");
    let yellow=document.querySelector("#yellow");
 
    red.style.opacity=1;
    setTimeout(() => {
        green.style.opacity=.2;
        red.style.opacity=.2;
        yellow.style.opacity=1;
    },15000);
 
    setTimeout(() => {
        red.style.opacity=.2;
        green.style.opacity=1;
        yellow.style.opacity=.2;
    },17000);
 
    setTimeout(() =>  {
        red.style.opacity=1;
        green.style.opacity=.2;
        yellow.style.opacity=.2;
    },27000);
}
let countDown=setInterval( () => {
    startLights();
},27000);

startLights();