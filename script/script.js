(function () {

    document.getElementById("selectRock").addEventListener("click", function () {
        document.getElementById("rock").style.display="inline";
        userIcon = 0;
        console.log(userIcon)
    });
    document.getElementById("selectPaper").addEventListener("click", function () {
        document.getElementById("paper").style.display="inline";
        userIcon = 1
        console.log(userIcon)
    });
    document.getElementById("selectScissors").addEventListener("click", function () {
        document.getElementById("scissors").style.display="inline";
        userIcon = 2
        console.log(userIcon)
    });



    document.getElementById("computerSelection").addEventListener("click", function () {
        var icons = [0, 1, 2];
        var randomIcon = icons[Math.floor(Math.random() * icons.length)];
        switch(randomIcon) {
            case 0:
                document.getElementById("rockComputer").style.display="inline";
                computerIcon = 0;
                console.log(computerIcon)
                break;
            case 1:
                document.getElementById("paperComputer").style.display="inline";
                computerIcon = 1;
                console.log(computerIcon)
                break;
            case 2:
                document.getElementById("scissorsComputer").style.display="inline";
                computerIcon = 3;
                console.log(computerIcon)
                break;
        }
    })

})();