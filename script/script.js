(function () {

    document.getElementById("selectRock").addEventListener("click", function () {
        document.getElementById("rock").style.display="inline";
        userIcon = 0;
        console.log(userIcon)
        randomElement()
    }, { once: true });
    document.getElementById("selectPaper").addEventListener("click", function () {
        document.getElementById("paper").style.display="inline";
        userIcon = 1;
        console.log(userIcon)
        randomElement()
    }, { once: true });
    document.getElementById("selectScissors").addEventListener("click", function () {
        document.getElementById("scissors").style.display="inline";
        userIcon = 2;
        console.log(userIcon)
        randomElement()
    }, { once: true });


    function randomElement() {
    document.getElementById("computerSelection").addEventListener("click", function () {
        let icons = [0, 1, 2];
        let randomIcon = icons[Math.floor(Math.random() * icons.length)];
        switch(randomIcon) {
            case 0:
                document.getElementById("rockComputer").style.display="inline";
                resultFinal()
                break;
            case 1:
                document.getElementById("paperComputer").style.display="inline";
                resultFinal()
                break;
            case 2:
                document.getElementById("scissorsComputer").style.display="inline";
                resultFinal()
                break;
        }
       console.log(randomIcon)
        function resultFinal () {
            if (userIcon === randomIcon) {
                document.getElementById("result").innerHTML = `It's a draw`
            }
            else if (userIcon === 0 && randomIcon === 2) {
                document.getElementById("result").innerHTML = `You win`
            }
            else if (userIcon === 2 && randomIcon === 0) {
                document.getElementById("result").innerHTML = `Computer wins`
            }
            else if (userIcon < randomIcon) {
                document.getElementById("result").innerHTML = `Computer wins`
            }
            else {
                document.getElementById("result").innerHTML = `You win`
            }
        }

    }, { once: true });


};

})();
