function BlazorChange1(objId, status) {
    if (status == 0) {
        document.getElementById(objId).style.fill = "gray";
        document.getElementById("gear_11").style.fill = "gray";
    }
    else if (status < 2) {
        document.getElementById(objId).style.fill = "green";
        document.getElementById("gear_11").style.fill = "green";
    }
    else {
        document.getElementById(objId).style.fill = "red";
        document.getElementById("gear_11").style.fill = "red";
    }
}