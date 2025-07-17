
const grey = document.getElementById('grey')
const white = document.getElementById('white')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')

// // Initial Color Of Body
// document.body.style.backgroundColor = 'skyblue'

// // For Grey
// grey.addEventListener('mouseenter', () => {
//     document.body.style.backgroundColor = 'grey';
// })

// grey.addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'white';
// })

// // For White
// white.addEventListener('mouseenter', () => {
//     document.body.style.backgroundColor = 'white';
// })

// white.addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'skyblue';
// })


// // For Blue
// blue.addEventListener('mouseenter', () => {
//     document.body.style.backgroundColor = '#3498db';
// })

// blue.addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'skyblue';
// })

// // For Yellow
// yellow.addEventListener('mouseenter', () => {
//     document.body.style.backgroundColor = '#cfb550';
// })

// yellow.addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'skyblue';
// })



const colorButtons = [
    { id: 'grey', color: 'grey' },
    { id: 'white', color: 'white' },
    { id: 'blue', color: '#3498db' },
    { id: 'yellow', color: '#cfb550' }
];

const initialColor = 'skyblue'; 
document.body.style.backgroundColor = initialColor;

colorButtons.forEach(btn => {
    const el = document.getElementById(btn.id);
    el.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = btn.color;
    });
    el.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = initialColor;
    });
});