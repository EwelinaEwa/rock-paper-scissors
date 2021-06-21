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

    function userClicked(icon) {
        userIcon = icon;
        randomElement(icon);
    }
    // });

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
            document.getElementById("playAgain").style.display="inline"
        }

    }, { once: true });

    document.getElementById("playAgain").addEventListener("click", function () {
        window.location.reload()
    })




}

})();
