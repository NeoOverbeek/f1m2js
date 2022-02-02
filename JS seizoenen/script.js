const mytitles =document.getElementById('mytitles');
const myimages =document.getElementById('myimages');

let seizoenen = [
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"pink"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"green"
    }
];



// let seizoenen ={
//     "titel":"lente",
//     "image":"img/spring.jpg"
// };

function show(index) {
    mytitles.innerHTML = seizoenen[index].titel;
    myimages.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
};

















