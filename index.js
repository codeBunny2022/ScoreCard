let homePoints = 0 
let awayPoints = 0
const homeScoreDisplay=document.getElementById("homeScore")
const awayScoreDisplay=document.getElementById("awayScore")
document.getElementById("homeScore").textContent = homePoints
document.getElementById("awayScore").textContent = awayPoints

function addHomePoint(points) {
    homePoints += points
    homeScoreDisplay.textContent = homePoints
}
function addAwayPoint(points) {
    awayPoints += points
    awayScoreDisplay.textContent = awayPoints
}
function resetScore() {
    homePoints = 0
    awayPoints = 0
    homeScoreDisplay.textContent = homePoints
    awayScoreDisplay.textContent = awayPoints
}