export function assignDotNetHelper(element, dotNetHelper) {
    element.dotNetHelper = dotNetHelper;
}

//function đc đăng ký ở sự kiện OnAfterRenderAsync của trang Scada.razor. trang nào cần dùng eventCallback.
export function addHandlers(element) {
    var helper = element.dotNetHelper;
    console.log(element.dotNetHelper)

    var tankImage = document.getElementById("tank");
    tankImage.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', tankImage.id);
    });

    var tankImagemRun = document.getElementById("mRun");
    tankImagemRun.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', tankImagemRun.id);
    });

    var tankImagemErr = document.getElementById("mErr");
    tankImagemErr.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', tankImagemErr.id);
    });

    var tankImagemStop = document.getElementById("mStop");
    tankImagemStop.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', tankImagemStop.id);
    });

    var lRun = document.getElementById("run");
    lRun.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', lRun.id);
    });
    var lOff = document.getElementById("off");
    lOff.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', lOff.id);
    });

    var lErr = document.getElementById("err");
    lErr.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', lErr.id);
    });

    var txtSetpoint = document.getElementById("tspan_txtMotorSetSpeed");
    txtSetpoint.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', txtSetpoint.id);
    });

    var txtSpeed = document.getElementById("tspan_txtMotorSpeed");
    txtSpeed.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', txtSpeed.id);
    });
}