let score =JSON.parse(localStorage.getItem('score'));

    if(score === null){
      score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
    }
   
   updateScoreElement();

      
   function playerPick(playerMove)
  {
     const computerMove = pick();
     let result= '';
      if(playerMove==='scissor') { 
      if(computerMove === 'Rock')
      {
        result='you lose.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='you win.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='tie.'
        console.log(result);
      }
   }

  else  if (playerMove==='paper'){
    if(computerMove === 'Rock')
      {
        result='you win.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='tie.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='you lose.'
        console.log(result);
      }
   }
   
   else if(playerMove==='Rock'){
      if(computerMove === 'Rock')
      {
        result='tie.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='you lose.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='you win.'
        console.log(result);
      }
    }
    if (result==='you win.'){
      score.wins +=1;
    }else if(result==='you lose.'){
      score.losses +=1;
    }else if(result==='tie.'){
      score.ties +=1;
    }
     localStorage.setItem('score',JSON.stringify(score)); 

     document.querySelector('.js_result')
    .innerHTML=`${result}`;  

    document.querySelector('.js_move')
    .innerHTML=` you<img src="img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">computer`;

    updateScoreElement();
  }
  function updateScoreElement(){
    document.querySelector('.js_score')
     .innerHTML=`wins: ${score.wins}. losses:${score.losses}. Ties: ${score.ties}.`;
  }

   function pick(){
    const randomNum = Math.random();   
    let computerMove = '';  
      if (randomNum>=0 && randomNum<1/3)
      {
        computerMove='Rock';
        console.log(computerMove);
      }
      else if(randomNum>=1/3 && randomNum<2/3)
      {
        computerMove='paper';
        console.log(computerMove);
      }
      else if(randomNum>=2/3 && randomNum<1)
      {
        computerMove='scissor';
        console.log(computerMove);  
      }
      return computerMove;
   }
  