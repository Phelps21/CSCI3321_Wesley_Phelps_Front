var gameOver = true
var tie = false
var currentPlayer = 'X'
var spotsLeft = 9

function placeMarker(spotId){
    var spot = document.getElementById(spotId)
    if(!gameOver && !tie && spot.innerHTML === ''){
    // get the spot by spotId
    // if the spot is empty, change spot.innerHTML to mark the spot
    spot.innerHTML = currentPlayer
    // else, do nothing
    spotsLeft--
    // switch player
    if(currentPlayer === 'X')
        currentPlayer = 'O'
    else
        currentPlayer = 'X'
    
    result.innerHTML = "It is player " + currentPlayer + "'s turn"
    isOver(spot)
    }
}

function isOver(spot){
    var s1 = document.getElementById('space-1')
    var s2 = document.getElementById('space-2')
    var s3 = document.getElementById('space-3')
    var s4 = document.getElementById('space-4')
    var s5 = document.getElementById('space-5')
    var s6 = document.getElementById('space-6')
    var s7 = document.getElementById('space-7')
    var s8 = document.getElementById('space-8')
    var s9 = document.getElementById('space-9')

    if (s1.innerHTML !== '' && s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML     // <= first row
        || s4.innerHTML !== '' && s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML   // <= second row
        || s7.innerHTML !== '' && s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML  // <= third row
        || s1.innerHTML !== '' && s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML  // <= first column
        || s2.innerHTML !== '' && s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML  // <= second column
        || s3.innerHTML !== '' && s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML  // <= third column
        || s1.innerHTML !== '' && s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML  // <= first diagonal
        || s3.innerHTML !== '' && s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML){  // <= second diagonal
        gameOver = true;
        result.innerHTML = "Player " + spot.innerHTML + " wins"
        play.style.display = "block"        // Show the play button again
        play.style.marginTop = "-130px"     // If this wasn't here the button would be in the board
        play.innerHTML = "Replay"
        }
    
    else if (spotsLeft === 0){
        tie = true
        result.innerHTML = "Its a tie"
        play.style.display = "block"
        play.style.marginTop = "-130px"
        play.innerHTML = "Replay"
    }
        
        
    else{
        gameOver = false
        tie = false
    }
}

function updateGameStatus(){
    gameOver = false
    tie = false
    play.style.display = "none"
    document.getElementById('space-1').innerHTML = ''
    document.getElementById('space-2').innerHTML = ''
    document.getElementById('space-3').innerHTML = ''
    document.getElementById('space-4').innerHTML = ''
    document.getElementById('space-5').innerHTML = ''
    document.getElementById('space-6').innerHTML = ''
    document.getElementById('space-7').innerHTML = ''
    document.getElementById('space-8').innerHTML = ''
    document.getElementById('space-9').innerHTML = ''
    result.innerHTML = "It is player " + currentPlayer + "'s turn"
    spotsLeft = 9
}