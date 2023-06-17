'use strict'

let secretNumber = Math.trunc(Math.random()*20)+1;

//for testing purpose
console.log(secretNumber);

let score =20;
let highscore = 0;

document.querySelector('.check').addEventListener
('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  
  //when no iput
  if(!guess){
    document.querySelector('.message').textContent = " 😒No Number!";

  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    
    document.querySelector('.number').textContent = secretNumber;


    document.querySelector('body').style.backgroundColor = '#087529';

    document.querySelector('.number').style.width ="20rem ";
    if(score>highscore){
      highscore=score;
    }
    
    document.querySelector('.highscore').textContent= highscore;
   
  }else if(guess !==secretNumber){
    if(score > 1){
      (guess>secretNumber) ?document.querySelector('.message').textContent= '📈 Too High':document.querySelector('.message').textContent= '📉Too Low';
      ;
      score--;
      document.querySelector('.score').textContent= score;
      }else{
        document.querySelector('.message').textContent= 'You Lose! Starting Again...';
        document.querySelector('.score').textContent='0';
        score=0;
        document.querySelector('body').style.backgroundColor= '#990000';
        document.querySelector('.number').textContent='😒';
        setTimeout(againfunction,3000);

      }
  }
});

document.querySelector('.again').addEventListener('click', againfunction); 

function againfunction(){
  // document.location.reload();
  //HIGHSCORE FUNCTIONALITY

  document.querySelector('body').style.backgroundColor='#222';
  score =20;
  document.querySelector('.score').textContent=20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent='?';
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.guess').value='';

};
