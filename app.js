console.log('Hello World!!!');


// buttons 
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

// let count = 1000;

// setInterval(() => {
//     count++;

//     let time;
    
//     if (count < 60) {

//         time = count < 10 ? `0:0${count}` : `0:${count}`;
//     } else {

//         if (count === 60) {
//             time = '1:00';
//         }

//         let minutes = Math.floor(count / 60);
//         let seconds = count - (minutes * 60);

//         seconds = seconds < 10 ? `0${seconds}` : seconds;
//         minutes = minutes < 10 ? `0${minutes}` : minutes;


//         time = `${minutes}:${seconds}`;
//     }

//     document.querySelector('#time').innerHTML = time;
// }, 1000);

let interval;

const start = () => {

    let count = 0;

    interval = setInterval(() => {
        count++;
    
        let time;
        
        if (count < 60) {
    
            time = count < 10 ? `0:0${count}` : `0:${count}`;
        } else {
    
            if (count === 60) {
                time = '1:00';
            }
    
            let minutes = Math.floor(count / 60);
            let seconds = count % 60;
    
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    
            time = `${minutes}:${seconds}`;
        }
    
        document.querySelector('#time').innerHTML = time;
    }, 1000);


};

const stop = () => {
    clearInterval(interval);
    document.querySelector('#time').innerHTML = '00:00';
};


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);


const textList = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Utren ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Sanczi ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Czyna ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
];

textList[0].split(' ').forEach((el, idx) => {
    const element = document.createElement('span');
    element.innerHTML = el + ' ';
    if (idx === 0) {
        element.classList.add('current');
    }
    element.id = idx;
    document.querySelector('.main-text').appendChild(element);
});