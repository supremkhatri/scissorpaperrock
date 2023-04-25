let computerdisplay = document.querySelector('.computerdisplay');
let playerdisplay = document.querySelector('.playerdisplay');
let comp = 0;
let play = 0;
let winner = document.querySelector('.winnerdisplay');
let time = document.querySelector('.timer');

function computerturn() { // generating a random computer answer
    let random_index = Math.floor(Math.random() * 6 + 1);
    if (random_index == 1 || random_index == 5) {
        computerdisplay.innerHTML = `<img class="computerimg" src="rock.jpg">`;
        comp = 1;
    }
     else if(random_index == 2 || random_index == 4) {
        computerdisplay.innerHTML = `<img class="computerimg" src="scissor.png">`;
        comp = 2;
    }
    else{
        computerdisplay.innerHTML = `<img class="computerimg" src="paper.png">`;
        comp = 3;
    }
}

function clear() { //clears everything
    winner.innerHTML = " ";
    computerdisplay.innerHTML = " ";
    playerdisplay.innerHTML = " ";
}
``
const timer = () => { //displays timer
    let count = 3;
    time.innerHTML = count;
    let interval = setInterval(() => {
        count--;
        time.innerHTML = count;
        if (count === 0) {
            clearInterval(interval);
            time.innerHTML = " ";
        }
    }, 1000);
}


let buttons = document.getElementsByClassName('button'); // displaying player's choice
for (let i = 0; i <= 2; i++) { 
    buttons[i].addEventListener('click', () => {
        timer();
        clear();
        setTimeout(function () {
            if (i == 0) {
                playerdisplay.innerHTML = `<img class="playerimg" src="scissor.png">`;
                play = 1;
            }
            if (i == 1) {
                playerdisplay.innerHTML = `<img class="playerimg" src="paper.png">`;
                play = 2;
            }
            if (i == 2) {
                playerdisplay.innerHTML = `<img class="playerimg" src="rock.jpg">`;
                play = 3;
            }
            computerturn();
            winnerdisplay();
        }, 3000)
    })
}

function winnerdisplay() { //checking winner
   if(comp == play){
    winner.innerHTML = "Computer won";
   }
   else if((comp+1)== play || (comp == 3 && play == 1)){
    winner.innerHTML = "Player won";
   }
   else{
    winner.innerHTML = "Draw";
   }
}
