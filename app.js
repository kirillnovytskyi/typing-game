console.log('Hello World!!!');


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


const textList = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Utren ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Sanczi ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
    'Czyna ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur dolore suscipit eaque qui rerum. Velit similique minima laboriosam sequi ratione, dignissimos sit maiores tempora enim ipsa doloribus aliquid cum.',
];

textList[0].split(' ').forEach(el => {

    const element = document.createElement('span');
    element.innerHTML = el + ' ';
    document.querySelector('.main-text').appendChild(element);
});