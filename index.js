function rollDice() {
    var randnum1 = Math.floor((Math.random() * 6) + 1);
    var randnum2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById('imgg1').setAttribute('src', `./images/dice${randnum1}.png`);
    document.getElementById('imgg2').setAttribute('src', `./images/dice${randnum2}.png`);

    if (randnum1 > randnum2){
        document.querySelector("h1").textContent = "Player 1 Wins";
    }else{
        document.querySelector("h1").textContent = "Player 2 Wins";    
    }

}

document.querySelector('.dice img.img1').addEventListener('click', rollDice);
document.querySelector('.dice img.img2').addEventListener('click', rollDice);
