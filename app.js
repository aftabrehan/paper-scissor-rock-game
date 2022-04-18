let computerScore = 0
let playerScore = 0



const game = () => {
    let computerScoreDisplay = document.querySelector('.computer-score p')
    let playerScoreDisplay = document.querySelector('.player-score p')

    let playerHand = document.getElementById('player-hand')
    let computerHand = document.getElementById('computer-hand')

    let choiceButton = document.querySelectorAll('.choice-btn')

    choiceButton.forEach(choosenBtn => {
        choosenBtn.addEventListener('click', function() {
            
      
        let computerOptions = ['rock', 'paper', 'scissor']
        let randomChoice = Math.floor(Math.random() * 3)
        let computerChoice = computerOptions[randomChoice]

        
        compareHands(this.textContent.toLowerCase(), computerChoice)


        let playerChoice = this.textContent.toLowerCase()
        
        playerHand.src = `./images/${playerChoice}.png`
        computerHand.src = `./images/${computerChoice}.png`
        })
        
            


    })

    let compareHands = (playerChoice, computerChoice) => {
        console.log(playerChoice, computerChoice)
        
        let status = document.getElementById('status-message')
        // if it is tie
        if (playerChoice === computerChoice) {
            status.textContent = `It's a tie.`
            return
        }


        // if playerChoice is rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                status.textContent = `Computer Wins`
                computerScore++
                computerScoreDisplay.textContent = computerScore
                return
            } else {
                status.textContent = `You Win.`
                playerScore++
                playerScoreDisplay.textContent = playerScore
                return
            }
        }


        // if playerChoice is paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissor') {
                status.textContent = `Computer Wins`
                computerScore++
                computerScoreDisplay.textContent = computerScore
                return
            } else {
                status.textContent = `You Win.`
                playerScore++
                playerScoreDisplay.textContent = playerScore
                return
            }
        }

        // if playerChoice is scissor
        if (playerChoice === 'scissor') {
            if (computerChoice === 'rock') {
                status.textContent = `Computer Wins`
                computerScore++
                computerScoreDisplay.textContent = computerScore
                return
            } else {
                status.textContent = `You Win.`
                playerScore++
                playerScoreDisplay.textContent = playerScore
                return
            }
        }

    }
    
    
 

    

    

}

game()