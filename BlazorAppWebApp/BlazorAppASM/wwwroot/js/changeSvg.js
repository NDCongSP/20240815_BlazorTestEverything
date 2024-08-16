function BlazorChange1(objId, status) {
    if (status == 0) {
        document.getElementById(objId).style.fill = "gray";
        document.getElementById("gear_11").style.fill = "gray";
        document.getElementById("MotorOff").style.visibility = "visible";
        document.getElementById("MotorOn").style.visibility = "hidden";
        document.getElementById("image1").style.visibility = "hidden";
    }
    else if (status == 2) {
        document.getElementById(objId).style.fill = "green";
        document.getElementById("gear_11").style.fill = "green";
        document.getElementById("MotorOff").style.visibility = "hidden";
        document.getElementById("image1").style.visibility = "hidden";
        document.getElementById("MotorOn").style.visibility = "visible";
    }
    else {
        document.getElementById(objId).style.fill = "red";
        document.getElementById("gear_11").style.fill = "red";
        document.getElementById("MotorOff").style.visibility = "hidden";
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("MotorOn").style.visibility = "hidden";
    }
}

function UpdateUI(status,mSpeed) {
    if (status == 0) {
        document.getElementById("mStop").style.visibility = "visible";
        document.getElementById("mRun").style.visibility = "hidden";
        document.getElementById("mErr").style.visibility = "hidden";

        document.getElementById("off").style.visibility = "visible";
        document.getElementById("run").style.visibility = "hidden";
        document.getElementById("err").style.visibility = "hidden";

        document.getElementById("l1").style.fill = "gray";
        document.getElementById("l2").style.fill = "gray";
        document.getElementById("l3").style.fill = "gray";

        document.getElementById("mStop").style.visibility = "visible";
        document.getElementById("mRun").style.visibility = "hidden";
        document.getElementById("mErr").style.visibility = "hidden";
    }
    else if (status == 1) {
        document.getElementById("mStop").style.visibility = "hidden";
        document.getElementById("mRun").style.visibility = "visible";
        document.getElementById("mErr").style.visibility = "hidden";

        document.getElementById("off").style.visibility = "hidden";
        document.getElementById("run").style.visibility = "visible";
        document.getElementById("err").style.visibility = "hidden";

        document.getElementById("l1").style.fill = "green";
        document.getElementById("l2").style.fill = "green";
        document.getElementById("l3").style.fill = "green";

        document.getElementById("mStop").style.visibility = "hidden";
        document.getElementById("mRun").style.visibility = "visible";
        document.getElementById("mErr").style.visibility = "hidden";
    }
    else {
        document.getElementById("mStop").style.visibility = "hidden";
        document.getElementById("mRun").style.visibility = "hidden";
        document.getElementById("mErr").style.visibility = "visible";

        document.getElementById("off").style.visibility = "hidden";
        document.getElementById("run").style.visibility = "hidden";
        document.getElementById("err").style.visibility = "visible";

        document.getElementById("l1").style.fill = "red";
        document.getElementById("l2").style.fill = "red";
        document.getElementById("l3").style.fill = "red";

        document.getElementById("mStop").style.visibility = "hidden";
        document.getElementById("mRun").style.visibility = "hidden";
        document.getElementById("mErr").style.visibility = "visible";        
    }

    document.getElementById("tspan1").textContent = Math.round(mSpeed,2);
    document.getElementById("tank").style.zIndex = 1;    
}

function testClick(e) {
    console.log(e)
    console.log(e.srcElement.id)
    DotNet.invokeMethodAsync('BlazorAppASM', 'Click', e.srcElement.id);
}