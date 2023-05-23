const slayer = document.querySelector('.slayer')
const cacto = document.querySelector('.cacto')
const pulo =() =>{
    slayer.classList.add('pulo');
setTimeout(()=>{
slayer.classList.remove('pulo')

},450);
}
const lose = setInterval(() => {
    const positcacto=cacto.offsetLeft;
    if(positcacto <= 110){
        cacto.style.animation='none'
        cacto.style.left=`${positcacto}px`
    }
    console.log(positcacto)
}, 10);

document.addEventListener('keyup',pulo);
function mainLoop() {
    console.clear();
  
    if (keys.up) {

        console.log('up')
        /*player pula quando a tecla é pressionada*/
    }
    else {
        console.log('neutral'); /*player volta ao lugar 
 */
    }
}
setInterval(mainLoop, 15)
