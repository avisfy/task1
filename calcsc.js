"use strict"
debugger
function calculate() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let oper = document.getElementById('operator').value;
    let res = document.getElementById("result");
    clearResult();

    if (checkZero()) {
        return;
    }

    let c;
    switch (oper) {
        case "plus":
            c = a + b;
            oper = "+";
            break;
        case "minus":
            c = a - b;
            oper = "-";
            break;
        case "mult":
            c = a * b;
            oper = "*";
            break;
        case "div":
            c = a / b;
            oper = "/";
            break;
    }

    if (c != undefined) {
        if (c > 100) {
            res.classList.add("outp-big");
        } else {
            res.classList.add("outp-small");
        }
        let historyObj = {
            first: a,
            operation: oper,
            second: b,
            result: c};
        res.value  = c;
        addHistory(historyObj);
    }
}

function addHistory(histObj) {
    let oldHistory = document.getElementById("history").value;
    let pos = oldHistory.indexOf("_");
    let newHistory =oldHistory.slice(0, pos);
    let number
    if (oldHistory.length !==0) {
         number = oldHistory.match(/\n/gm).length;
    } else {
        number = 1;
        let btnClr = document.getElementById("btn-clr");
        btnClr.classList.remove("btn-clr-hide");
        btnClr.classList.add("btn-clr-show");
    }
    newHistory = `${newHistory}${number}: ${histObj.first} ${histObj.operation} ${histObj.second} = ${histObj.result}
__________
${number}`;
    let ta = document.getElementById("history");
    ta.value = newHistory;
    ta.scrollTop = ta.scrollHeight;
}

function checkZero() {
    let b = Number(document.getElementById('second').value);
    let oper = document.getElementById('operator').value;
    if ((oper == "div") && (b == 0.0)) {
        document.getElementById('second').style.border = "1px double red";
        document.getElementById('tip').style.display = "inline";
        return true;
    } else {
        resetSecond();
        return false;
    }
}

function clearHistory() {
    document.getElementById("history").value = "";
    //hide clear button
    let btnClr = document.getElementById("btn-clr");
    btnClr.classList.remove("btn-clr-show");
    btnClr.classList.add("btn-clr-hide");
    document.getElementById("first").value = "";
    document.getElementById("operator").value = "plus";
    document.getElementById("second").value = "";
    resetSecond();
    clearResult();
}

function clearResult() {
    let res = document.getElementById("result");
    res.value = "";
    res.className = "outp";
}

function resetSecond() {
    document.getElementById('second').style.border = "";
    document.getElementById('tip').style.display = "none";
}