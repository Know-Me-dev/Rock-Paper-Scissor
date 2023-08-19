

    const playerText = document.querySelector("#playerText")
    const computerText = document.querySelector("#computerText")
    const resultText = document.querySelector("#resultText")
    const choiceBtns = document.querySelectorAll(".choiceBtn")
    const rockBtn = document.querySelector("#rockBtn")
    const paperBtn = document.querySelector("#paperBtn")
    const scissorBtn = document.querySelector("#scissorBtn")
    const playerPoints = document.querySelector("#playerPoints")
    const computerPoints = document.querySelector("#computerPoints")
    let player;
    let computer;
    let result;
    let input = window.prompt("Enter Your Name:")
    let countOne = 0;
    let countTwo = 0;
    
    playerText.textContent = `${input}:`;
    playerPoints.textContent = `${input}'s score: 0`
        
    choiceBtns.forEach( (button) => {
        button.addEventListener('click', () => {
            
    
            
            player = button.textContent;
            computerTurn();
            playerText.textContent = `${input}: ${player}`
            computerText.textContent = `Computer: ${computer}`
            resultText.textContent = checkWinner()
            
            
         
              if (resultText.textContent === "YOU WIN!"){
                 countOne += 1
                 playerPoints.textContent = `${input}'s Score: ${countOne}`

            }

            else if (resultText.textContent === "YOU LOSE!"){
                 countTwo += 1
                 computerPoints.textContent = `Computer's Score: ${countTwo}`
            }
            
            
            if(countOne > countTwo){
                playerPoints.style.color = "#41df68"
                computerPoints.style.color = "#ef2929"
            }
            else if(countOne < countTwo){
                computerPoints.style.color = "#41df68"
                playerPoints.style.color = "#ef2929"
                
                
            } else {
                playerPoints.style.color = "#f5a851"
                computerPoints.style.color = "#f5a851"
            }
        
            
            // player =  "🤚";

            // player =  "✌";
            // console.log(player)

            
                 if (resultText.textContent === "YOU WIN!"){
                return resultText.style.color = "#41df68"
                  } else if (resultText.textContent === "DRAW!"){
                    return resultText.style.color = "#f5a851"
                 } else if (resultText.textContent === "YOU LOSE!") {
                      return resultText.style.color = "#ef2929"
            }
            
            
          
            
        })
    })
    
    // rockBtn.addEventListener('click' , () => {
        
    //         player = "✊";
    //         computerTurn();
    //         playerText.textContent = ` ${input} : ${player}`
    //         computerText.textContent = `Computer: ${computer}`
    //         resultText.textContent =  checkWinner()
            
    //          if (resultText.textContent === "YOU WIN"){
    //             return resultText.style.color = "#41df68"
    //         } else if (resultText.textContent === "DRAW!"){
    //             return resultText.style.color = "#f5a851"
    //         } else if (resultText.textContent === "YOU LOSE") {
    //             resultText.style.color = "#910900"
    //         }
            
    // })
    
    // paperBtn.addEventListener('click' , () => {
        
    //         player = "🤚";
    //         computerTurn();
    //         playerText.textContent = ` ${input} : ${player}`
    //         computerText.textContent = `Computer: ${computer}`
    //         resultText.textContent = checkWinner()
            
    //          if (resultText.textContent === "YOU WIN"){
    //             return resultText.style.color = "#41df68"
    //         } else if (resultText.textContent === "DRAW!"){
    //             return resultText.style.color = "#f5a851"
    //         } else if (resultText.textContent === "YOU LOSE") {
    //             return resultText.style.color = "#910900"
    //         }
            
    // })
    
    
    // scissorBtn.addEventListener('click' , () => {
        
    //         player = "✌";
    //         computerTurn();
    //         playerText.textContent = ` ${input} : ${player}`
    //         computerText.textContent = `Computer: ${computer}`
    //         resultText.textContent = checkWinner()
            
    //         if (resultText.textContent === "YOU WIN"){
    //             return resultText.style.color = "#41df68"
    //         } else if (resultText.textContent === "DRAW!"){
    //             return resultText.style.color = "#f5a851"
    //         } else if (resultText.textContent === "YOU LOSE") {
    //              return resultText.style.color = "#910900"
    //         }
          
    // })
    
    
  
    
    function computerTurn(){
        

        
    const randNum  = Math.floor(Math.random() * 3) + 1
    
    
    switch(randNum){
      case 1:
        computer = "PAPER 🤚";
        break;
        
      case 2:
        computer = "ROCK ✊";
        break;
        
      case 3:
        computer = "SCISSOR ✌";
        break;
        
      }
      

      
        
      
    }
    
    function checkWinner(){
        if(computer == player){
            return "DRAW!"
        }
        else if (computer == "ROCK ✊"){
            return player == "PAPER 🤚" ? "YOU WIN!" : "YOU LOSE!"
        }
         else if (computer == "PAPER 🤚"){
            return player == "SCISSOR ✌" ? "YOU WIN!" :"YOU LOSE!"
        }
           else if (computer == "SCISSOR ✌"){
            return player == "ROCK ✊" ? "YOU WIN!" : "YOU LOSE!"
    
        }
        
        
     
        
    }
    