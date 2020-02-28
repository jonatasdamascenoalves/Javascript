var result = document.getElementById("result");
var n1 = 0, n2 = 0
var operacao = ""

function onNumberClicked(numberButton) {

    if (result.innerHTML == "0") {
        result.innerHTML = numberButton.innerHTML;
    }
    else {
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked() {
    result.innerHTML = "0";
    n1 = 0;
    n2 = 0;
}

function onEqualsClicked() {
    n2 = parseInt(result.innerHTML);
    if (operacao == "+") {
        result.innerHTML = n1 + n2
    }

    if (operacao == "-") {
        result.innerHTML = n1 - n2
    }

    if (operacao == "/") {
        if (n2 > 0) {
            result.innerHTML = n1 / n2
        }
        else {
            result.innerHTML = "Impossivel a divisão por ZERO!!!"
        }
    }
    if (operacao == "*") {
        result.innerHTML = n1 * n2
    }


    //TODO implement this function
}

function onDivideClicked() {
    n1 = result.innerHTML
    n1 = parseInt(n1);
    operacao = "/";
    result.innerHTML = "0"
    //TODO implement this function
}



function onAddClicked() {
    n1 = result.innerHTML
    n1 = parseInt(n1);
    operacao = "+";
    result.innerHTML = "0"
    //TODO implement this function
}

function onSubtractClicked() {
    n1 = result.innerHTML
    n1 = parseInt(n1);
    operacao = "-";
    result.innerHTML = "0"
    //TODO implement this function
}

function onMultiplyCliked() {
    n1 = result.innerHTML
    n1 = parseInt(n1);
    operacao = "*";
    result.innerHTML = "0"
    //TODO implement this function
}

