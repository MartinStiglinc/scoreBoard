let scoreGuest = 0
let scoreHome = 0
let guestEl = document.getElementById("guest-el")
let homeEl = document.getElementById("home-el")

function addScore(team, score){
    if(team === 'guest'){
        scoreGuest += score
        guestEl.textContent = scoreGuest
    } else {
        scoreHome += score
        homeEl.textContent = scoreHome 
    }
    colors()
}

// function addG1(){
//     scoreGuest += 1
//     guestEl.textContent = scoreGuest
//     colors()
// }

// function addG2(){
//     scoreGuest += 2
//     guestEl.textContent = scoreGuest
//     colors()
// }
// function addG3(){
//     scoreGuest += 3
//     guestEl.textContent = scoreGuest
//     colors()
// }
// function addH1(){
//     scoreHome += 1
//     homeEl.textContent = scoreHome
//     colors()
// }
// function addH2(){
//     scoreHome += 2
//     homeEl.textContent = scoreHome
//     colors()
// }
// function addH3(){
//     scoreHome += 3
//     homeEl.textContent = scoreHome
//     colors()
// }

function colors(){
    if(scoreHome>scoreGuest){
        homeEl.style.color = "green"
        guestEl.style.color = "#CC360F"
    }
    else if (scoreHome<scoreGuest){
        homeEl.style.color = "#CC360F"
        guestEl.style.color = "green"
    }
    else {
        homeEl.style.color = "#CC360F"
        guestEl.style.color = "#CC360F"
    }
}

function nullScore() {
    scoreHome = 0
    scoreGuest = 0
    homeEl.textContent = scoreHome
    guestEl.textContent = scoreGuest
    homeEl.style.color = "#CC360F"
    guestEl.style.color = "#CC360F"
}
