(function () {
    document.getElementById("selectRock").addEventListener("click", function () {
        userClicked("rock", 0)
    }, { once: true });
    document.getElementById("selectPaper").addEventListener("click", function () {
        userClicked("paper", 1)
    }, { once: true });
    document.getElementById("selectScissors").addEventListener("click", function () {
        userClicked("scissors", 2)
    }, { once: true });

    function userClicked(id, icon) {
        document.getElementById(id).style.display="inline";
        document.getElementById("userSelection").style.display="inline";
        userIcon = icon
        randomElement(icon)
    }

    function randomElement(userIcon) {
    document.getElementById("computerSelection").addEventListener("click", function () {
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
            document.getElementById("randomSelection").style.display="inline";
            resultFinal()
        }

        function resultFinal () {
            if (userIcon === randomIcon) {
                document.getElementById("result").style.display="inline";
                document.getElementById("result").innerHTML = `It's a draw`
            }
            else if (userIcon === 0 && randomIcon === 2) {
                document.getElementById("result").style.display="inline";
                document.getElementById("result").innerHTML = `You win`
            }
            else if (userIcon === 2 && randomIcon === 0) {
                document.getElementById("result").style.display="inline";
                document.getElementById("result").innerHTML = `Computer wins`
            }
            else if (userIcon < randomIcon) {
                document.getElementById("result").style.display="inline";
                document.getElementById("result").innerHTML = `Computer wins`
            }
            else {
                document.getElementById("result").style.display="inline";
                document.getElementById("result").innerHTML = `You win`
            }
        }

    }, { once: true });


};

})();
