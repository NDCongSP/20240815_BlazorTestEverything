function BlazorChange1(objId, status) {
    if (status == 0) {
        document.getElementById(objId).style.fill = "gray";
    }
    else if (status < 2) {
        document.getElementById(objId).style.fill = "green";
    }
    else {
        document.getElementById(objId).style.fill = "red";
    }
}