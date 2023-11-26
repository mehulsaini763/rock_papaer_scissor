let score = JSON.parse(localStorage.getItem('score')) || {
    win:0,
    loose:0,
    ties:0,
};
function user_move(move){
    const computer_moves = computer_move();
    let result = '';
    if(move === 'rock'){
        document.querySelector('.your_choice_img').innerHTML = '<img src="https://mehulsaini763.github.io/rock_papaer_scissor/images/rock-emoji.png"width:"100%" height:"100%" />';
        if(computer_moves === 'rock'){
            score.ties++;
            result = "It's a Tie!";
        }
        else if(computer_moves === 'paper'){
            score.loose++;
            result = 'You Loose';
        }
        else if (computer_moves === 'scissor'){
            score.win++;
            result = 'You Win';
        }
    }
    else if(move === 'paper'){
        document.querySelector('.your_choice_img').innerHTML = '<img src="https://mehulsaini763.github.io/rock_papaer_scissor/images/paper-emoji.png"width:"100%" height:"100%" />';
        if(computer_moves === 'rock'){
            score.win++;
            result = 'You Win';
        }
        else if(computer_moves === 'paper'){
            score.ties++;
            result = "It's a Tie!";
        }
        else if(computer_moves === 'scissor'){
            score.loose++;
            result = 'You Loose';
        }
    }
    else if(move === 'scissor'){
        document.querySelector('.your_choice_img').innerHTML = '<img src="https://mehulsaini763.github.io/rock_papaer_scissor/images/scissors-emoji.png"width:"100%" height:"100%" />';
        if(computer_moves === 'rock'){
            score.loose++;
            result = 'You Loose';
        }
        else if(computer_moves === 'paper'){
            score.win++;
            result = 'You Win';
        }
        else if(computer_moves === 'scissor'){
            score.ties++;
            result = "It's a Tie!";
        }
    }
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;



    document.querySelector('.js-score').innerHTML = (`Win: ${score.win} ,     Loose: ${score.loose} , Ties: ${score.ties}`);

}

function computer_move(){
    let random = Math.random();
    let computer_moves ='';
    if(random >=0 && random < 1/3){
        document.querySelector('.computer_choice_img').innerHTML = '<img src="../images/rock-emoji.png"width:"100%" height:"100%" />';
        computer_moves = 'rock';
    }
    else if(random >= 1/3 && random < 2/3){
        document.querySelector('.computer_choice_img').innerHTML = '<img src="../images/paper-emoji.png"width:"100%" height:"100%" />';
        computer_moves = 'paper';
    }
    else if(random >= 2/3 && random < 1){
        document.querySelector('.computer_choice_img').innerHTML = '<img src="../images/scissors-emoji.png"width:"100%" height:"100%" />';
        computer_moves='scissor';
    }
    return computer_moves
}

function reset(){
    score ={
        win:0,
        loose:0,
        ties:0,
    };
    localStorage.removeItem("score");
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-score').innerHTML = (`Win: ${score.win} ,     Loose: ${score.loose} , Ties: ${score.ties}`);    
}


