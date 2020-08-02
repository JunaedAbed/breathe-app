const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; 
const holdTime = (totalTime / 5); //1500 ms

breathAnim();

function breathAnim(){
    text.innerHTML = 'Breath In!';

    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold'; //text will change to hold after breatheTime amount of time

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

//run this every 7.5s
setInterval(breathAnim, totalTime);