(function () {
    document.getElementById("selectRock").addEventListener("click", function () {
        userClicked(0)
        document.getElementById("selectPaper").style.display="none";
        document.getElementById("selectScissors").style.display="none";
    });
    document.getElementById("selectPaper").addEventListener("click", function () {
        userClicked( 1)
        document.getElementById("selectRock").style.display="none";
        document.getElementById("selectScissors").style.display="none";
    });
    document.getElementById("selectScissors").addEventListener("click", function () {
        userClicked(2)
        document.getElementById("selectRock").style.display="none";
        document.getElementById("selectPaper").style.display="none";
    });

    let userScore = 0;
    let computerScore = 0;

    function userClicked(icon) {
        userIcon = icon;
        randomElement(icon);
        document.getElementById("computerSelection").style.display="none";

    }

    function randomElement(userIcon) {
        let icons = [0, 1, 2];
        let randomIcon = icons[Math.floor(Math.random() * icons.length)];
        switch(randomIcon) {
            case 0:
                computerSelected("rockComputer")
                break;
            case 1:
                computerSelected("paperComputer")
                break;
            case 2:
                computerSelected("scissorsComputer")
                break;
        }

        function computerSelected(id) {
            document.getElementById(id).style.display="inline";
            document.getElementById("randomSelection").style.visibility="visible";
            resultFinal()
        }



        function resultFinal () {

            if (userIcon === randomIcon) {
                document.getElementById("result").innerHTML = `It's a draw`;
            }
            else if (userIcon === 0 && randomIcon === 2) {
                document.getElementById("result").innerHTML = `You win`;
                userScore++;
            }
            else if (userIcon === 2 && randomIcon === 0) {
                document.getElementById("result").innerHTML = `Computer wins`;
                computerScore++;
            }
            else if (userIcon < randomIcon) {
                document.getElementById("result").innerHTML = `Computer wins`;
                computerScore++;
            }
            else {
                document.getElementById("result").innerHTML = `You win`
                userScore++;
            }
            document.getElementById("result").style.visibility="visible";
            document.getElementById("playAgain").style.visibility="visible";
            document.getElementById("userScore").innerHTML = `${userScore}`;
            document.getElementById("computerScore").innerHTML = `${computerScore}`;
        }

    document.getElementById("playAgain").addEventListener("click", function () {
        document.getElementById("selectRock").style.display="inline";
        document.getElementById("selectPaper").style.display="inline";
        document.getElementById("selectScissors").style.display="inline";
        document.getElementById("rockComputer").style.display="none";
        document.getElementById("paperComputer").style.display="none";
        document.getElementById("scissorsComputer").style.display="none";
        document.getElementById("randomSelection").style.visibility="hidden";
        document.getElementById("computerSelection").style.display="none";
        document.getElementById("result").style.visibility="hidden";
        document.getElementById("playAgain").style.display="visible";
    })

}

})();
