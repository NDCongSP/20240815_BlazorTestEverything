function BlazorChange1(objId, status) {
    if (document.getElementById(objId) == null) return;

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

//function thay đổi giá trị của các label và textbox.
function ChangeValue(objId, value) {
    if (document.getElementById(objId) == null) return;

    document.getElementById(objId).textContent = value;
}

var _elementId;
function UpdateUI(status, mSpeed) {
    if (status == 0) {
        _elementId = document.getElementById("mStop");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("mRun");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("mErr");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }

        _elementId = document.getElementById("l1");
        if (_elementId) {
            _elementId.style.fill = "gray";
        }
        _elementId = document.getElementById("l2");
        if (_elementId) {
            _elementId.style.fill = "gray";
        }
        _elementId = document.getElementById("l3");
        if (_elementId) {
            _elementId.style.fill = "gray";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
    }
    else if (status == 1) {
        _elementId = document.getElementById("mStop");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("mRun");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("mErr");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }

        _elementId = document.getElementById("l1");
        if (_elementId) {
            _elementId.style.fill = "green";
        }
        _elementId = document.getElementById("l2");
        if (_elementId) {
            _elementId.style.fill = "green";
        }
        _elementId = document.getElementById("l3");
        if (_elementId) {
            _elementId.style.fill = "green";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
    }
    else {
        _elementId = document.getElementById("mStop");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("mRun");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("mErr");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }

        _elementId = document.getElementById("l1");
        if (_elementId) {
            _elementId.style.fill = "red";
        }
        _elementId = document.getElementById("l2");
        if (_elementId) {
            _elementId.style.fill = "red";
        }
        _elementId = document.getElementById("l3");
        if (_elementId) {
            _elementId.style.fill = "red";
        }

        _elementId = document.getElementById("off");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("run");
        if (_elementId) {
            _elementId.style.visibility = "hidden";
        }
        _elementId = document.getElementById("err");
        if (_elementId) {
            _elementId.style.visibility = "visible";
        }
    }

    _elementId = document.getElementById("tspan_txtMotorSpeed");
    if (_elementId) {
        _elementId.textContent = mSpeed;
    }

    _elementId = document.getElementById("tank");
    if (_elementId) {
        _elementId.style.zIndex = 1;
    }
}

//đc gọi ở sự kiện onclick trong cái ảnh SVG, element nào dùng thì thêm onclick vào rồi tạo funtion tương ứng.
function testClick(e) {
    //console.log(e)
    //console.log(e.srcElement.id)

    //bỏ dòng dưới vào trong snhr SVG ở element nào cần click
    //onclick="testClick(event)"
    DotNet.invokeMethodAsync('BlazorAppASM', 'Click', e.srcElement.id);
}