function ChangeValue(objId, value) {
    if (document.getElementById(objId) == null) return;

    document.getElementById(objId).style.width = value;
}