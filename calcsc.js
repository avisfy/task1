"use strict"
function test() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let oper = document.getElementById('operator').value;
    if (isNaN(a)) {
        alert("Error format: second number");
    } else if (isNaN(b)) {
        alert("Error format: first number");
    } else {
        if (checkZero()) {
            return;
        }
        let c;
        switch (oper) {
            case "plus":
                c = a + b;
                break;
            case "minus":
                c = a - b;
                break;
            case "mult":
                c = a * b;
                break;
            case "div":
                c = a / b;
                break;
        }
        if (c != undefined) {
            document.getElementById("result").value = c;
        }
    }
}

function checkZero() {
    let b = Number(document.getElementById('second').value);
    let oper = document.getElementById('operator').value;
    if ((oper == "div") && (b == 0.0)) {
        document.getElementById('second').style.border = "1px double red";
        document.getElementById('tip').style.display = "inline";
        return true;
    } else {
        document.getElementById('second').style.border = "1px double grey";
        document.getElementById('tip').style.display = "none";
        return false;
    }
}
