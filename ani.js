const container = document.querySelector('.ani-container');
const nameplate = document.querySelector('.ani-nameplate');
const ascii = document.querySelector('.ascii_art');
const myname = document.querySelector('#myname');
const mytitle = document.querySelector('#mytitle');
const dosbox__shadow = document.querySelector('.dosbox__shadow');
const header = document.querySelector('.dosbox-window__header');
const contacts = document.querySelector('.dosbox__contacts');

// const body = document.querySelector('body');

// body.addEventListener('mousemove', evt => {
//     console.log('clean X and Y: ', evt.pageX, evt.pageY);

//     console.log('calcd X and Y: ', evt.pageX, evt.pageY - 305);

// });

// console.log(`Height is: ${nameplate.offsetHeight}`);
container.style.height = `${nameplate.offsetHeight * 1.2}px`;


container.addEventListener('mousemove', (evt) => {
    // console.log(evt.pageX);
    let xAxis = (window.innerWidth / 2 - evt.pageX) / 20;
    let yAxis = (window.innerHeight / 4 - evt.pageY) / 20;
    nameplate.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', evt => {
    // nameplate.style.transition = 'none';
    nameplate.style.transition = 'all 0.2s ease';
    ascii.style.transform = 'translateZ(50px)';
    myname.style.transform = 'translateZ(15px)';
    mytitle.style.transform = 'translateZ(25px)';
    header.style.transform = 'translateZ(2px)';
    contacts.style.transform = 'translateZ(15px)';
    // dosbox__shadow.style.transform = 'translateZ(-100px)';
})

container.addEventListener('mouseleave', evt => {
    nameplate.style.transition = 'all 0.5s ease';
    nameplate.style.transform = `rotateY(0deg) rotateX(0deg)`;
    ascii.style.transform = 'translateZ(0px)';
    myname.style.transform = 'translateZ(0px)';
    mytitle.style.transform = 'translateZ(0px)';
    header.style.transform = 'translateZ(0px)';
    contacts.style.transform = 'translateZ(0px)';
})