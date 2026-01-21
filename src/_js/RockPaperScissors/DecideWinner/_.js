function decideWinner (playerOption, iaOption){
    if(playerOption === iaOption){
        return "Tie"
    }

    switch(playerOption){
        case "rock":
            if(iaOption === "scissors"){
                return "player"
            }else{
                return "ia"
            }

        case "paper":

        if(iaOption === "rock"){
                return "player"
            }else{
                return "ia"
            }
        

        case "scissors":
         
        if(iaOption === "paper"){
                return "player"
            }else{
                return "ia"
            }

     }
}

export function addPlayerPoint(playerOption, iaOption){
    let winner = decideWinner(playerOption, iaOption)
    if(winner === "player"){
        let pointPlayerSpan = document.getElementById("span_player_points")
        pointPlayerSpan.textContent = parseInt(pointPlayerSpan.textContent) + 1
        localStorage.setItem('rps_player', pointPlayerSpan.textContent)
    }else if(winner = "ia"){
        let pointIaSpan = document.getElementById("span_ia_points")
        pointIaSpan.textContent = parseInt(pointIaSpan.textContent) + 1
        localStorage.setItem('rps_ia', pointIaSpan.textContent)
    }else{
        alert(winner)
    }
}
export function checkwinner(){
    let spanPlayerPoints = document.getElementById("span_player_points")
    let spanIaPoints = document.getElementById("span_ia_points")
    let playerPoints = parseInt (spanPlayerPoints.textContent)
    let iaPoints = parseInt (spanIaPoints.textContent)
    if(playerPoints === 3){
        alert ("The winner is the player")
        spanPlayerPoints.textContent = 0
        spanIaPoints.textContent = 0
        localStorage.setItem('rps_player', 0)
        localStorage.setItem('rps_ia', 0)
    }else if(iaPoints === 3){
        alert("The winner is the Ia")
        spanPlayerPoints.textContent = 0
        spanIaPoints.textContent = 0
        localStorage.setItem('rps_player', 0)
        localStorage.setItem('rps_ia', 0)
    }
}