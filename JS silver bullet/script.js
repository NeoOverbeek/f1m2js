const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

const knopnoord =  document.getElementById('knopnoord');
const knopwest  = document.getElementById('knopwest');
const knopoost  = document.getElementById('knopoost');
const knopzuid  = document.getElementById('knopzuid');


let directionbuttons = {
    "noord": document.getElementById('knopnoord'),
    "oost": document.getElementById('knopoost'),
    "zuid": document.getElementById('knopzuid'),
    "west": document.getElementById('knopwest')

}

let current_index = 0;

let locaties = [
// eerste
{          
    "title":"ingang silver bullet", 
    "img":"img/0.jpg",
    "directions": {
        "zuid": 1
    }            
},
// tweede
{          
    "title":"gang bij docenten kamer", 
    "img":"img/1.jpg",
    "directions": {
        "west": 2,
        "oost": 5,
        "zuid": 4
    }                
},
// derde
{          
    "title":"gang voor de trap", 
    "img":"img/2.jpg",
    "directions": {
        "zuid": 3,
        "oost": 1
    }              
},
// vierde
{          
    "title":"kleine ruimte", 
    "img":"img/3.jpg",
    "directions": {
        "noord": 2
    }               
},
// viijfde
{          
    "title":"docentenkamer", 
    "img":"img/4.jpg",
    "directions": {
        "noord": 1
    }              
},
// zesde
{          
    "title":"gang voor c 0.90", 
    "img":"img/5.jpg",
    "directions": {
        "noord": 10,
        "oost": 6,
        "zuid": 11
    }              
},
// zevende
{          
    "title":"gang voor de tioletten", 
    "img":"img/6.jpg",
    "directions": {
        "west": 5,
        "oost": 7,
        "zuid": 11
    }              
},
// achtste
{          
    "title":"gang bij 0.93", 
    "img":"img/7.jpg",
    "directions": {
        "noord": 9,
        "zuid": 8
    }  

},
// negende
{          
    "title":"lokaal 0.93", 
    "img":"img/8.jpg",
    "directions": {
        "noord": 7
    }  

},
// tiende
{          
    "title":"lokaal 0.92", 
    "img":"img/9.jpg",
    "directions": {
        "zuid": 7,
        "west": 10
    }              
},
// elf
{          
    "title":"lokaal 0.90", 
    "img":"img/10.jpg",
    "directions": {
        "west": 9,
        "zuid": 5
    }              
},
// twaalf
{          
    "title":"toiletten", 
    "img":"img/11.jpg", 
    "directions": {
        "noord": 6
    }             
}
        
];




// mytitle.innerHTML = "dit is door het script toegevoegd";
// myimage.src = "img/1.jpg";

function show(index) {
    mytitle.innerHTML = locaties[index].title;
    myimage.src = locaties[index].img;
    current_index = index;

    // knoppen opneiuw berekenen
    updatedirections();
}

function updatedirections() {
    // haal de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions;
    // zet de directions keys in een aparte variable
    let possible_keys = Object.keys(possible);

    // zet de keys van de buttons in een aparte variable
    let buttons_keys = Object.keys(directionbuttons);
    console.log(buttons_keys);
    // zet de buttons knoppen uit
   for(const key of buttons_keys) {
       directionbuttons[key].style.visibility = "hidden";
   }
    // zet nu de mogelijke knoppen {direction} aan
    for(const key of possible_keys) {
        directionbuttons[key].style.visibility = 'visible';
    }
}


function getinput(){
    show(myinput.value);
    // console.log(myinput.value);
    myinput.value = "";
    myinput.focus();
}

function godirection(richting) {
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index)
}

show(0);











