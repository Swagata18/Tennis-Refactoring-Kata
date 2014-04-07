
var TennisGame1 = function(player1Name, player2Name) {
    this.player1_score = 0;
    this.player2_score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.player1_score += 1;
    else
        this.player2_score += 1;
};


TennisGame1.prototype.getScore = function() {
    var score = "";

    if (this.player1_score === this.player2_score) {
        score = getFinalScore(this.player1_score, "", "-All");
    }
    else if (this.player1_score >= 4 || this.player2_score >= 4) {

        var minusResult = this.player1_score - this.player2_score;

        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2)  score = "Win for player1";
        else score = "Win for player2";
    }
    else {
        var tempScore = 0;
        for (var i = 1; i < 3; i++) {
            if (i === 1) {tempScore = this.player1_score;}
            else {score += "-"; tempScore = this.player2_score;}

        score = getFinalScore(tempScore, score, "");
        }
    }
    return score;
};


function getFinalScore(tempScore, score, score_suffix) {

    switch (tempScore) {
        case 0:
            score += "Love" + score_suffix;
            break;
        case 1:
            score += "Fifteen" + score_suffix;
            break;
        case 2:
            score += "Thirty" + score_suffix;
            break;
        case 3:
            if(score_suffix === "-All")  score = "Deuce";
            else score+="Forty";
            break;
        default:
            if(score_suffix == "-All") score = "Deuce";
              else break;
        }
  return score;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

