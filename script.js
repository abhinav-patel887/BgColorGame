//Generating the Random number
const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let ref;
const startchange=function(){
    ref=setInterval(changebg,500);
    function changebg(){
        document.body.style.backgroundColor=randomcolor();
    }
};
const stopchange=function(){
    clearInterval(ref)
    ref=null
};
document.querySelector('#start').addEventListener
    ('click',startchange)
document.querySelector('#stop').addEventListener
    ('click',stopchange)
