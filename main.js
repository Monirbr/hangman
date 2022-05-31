const secretphrases =["glow", "orange", "break", "hope", "fight", "sad", "coconut"];
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;





function selectRandomItem(){
    randomItem = secretphrases[Math.floor(Math.random()*secretphrases.length)];
    document.getElementById("letters").addEventListener("click", buttonhandler)
    window.addEventListener("keydown" , keyHandler);
    console.log(randomItem);
}


function setUnderScores(){
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter)>= 0 ? letter : "-"))
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML= `<p>${result}</p>`
}


function checkIfWon (){
    if(randomItem === result){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src= "image/winner.png";
    }
}


function checkIfLost (){
    if(mistakes === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p>Random word is ${randomItem}</p>`;
   
    }
}

function updateHangmanpicture(){
const image =document.getElementById("image").querySelector("img");
image.src = `image/hangman${mistakes}.png`;
}


function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className ="used";
    if(randomItem.indexOf(letter) >=0){
        setUnderScores();
        checkIfWon ()

    }else if (randomItem.indexOf(letter)===-1){
        mistakes++;
        checkIfLost();
        updateHangmanpicture();
    }
}


function buttonhandler(event){
    letterHandler(event.target.id)
}



function keyHandler(){
    letterHandler(event.key)
}




selectRandomItem();
setUnderScores();