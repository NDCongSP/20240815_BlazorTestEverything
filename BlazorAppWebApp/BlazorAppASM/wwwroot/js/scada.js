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

    //var tankImagemErr = document.getElementById("mErr");
    //tankImagemErr.addEventListener("click", async () => {
    //    await helper.invokeMethodAsync('ScadaTestClick', tankImagemErr.id);
    //});

    //var tankImagemStop = document.getElementById("mStop");
    //tankImagemStop.addEventListener("click", async () => {
    //    await helper.invokeMethodAsync('ScadaTestClick', tankImagemStop.id);
    //});

    //var tankImageLight = document.getElementById("off");
    //tankImageLight.addEventListener("click", async () => {
    //    await helper.invokeMethodAsync('ScadaTestClick', tankImageLight.id);
    //});
    //tankImageLight = document.getElementById("on");
    //tankImageLight.addEventListener("click", async () => {
    //    await helper.invokeMethodAsync('ScadaTestClick', tankImageLight.id);
    //});
    //tankImageLight = document.getElementById("err");
    //tankImageLight.addEventListener("click", async () => {
    //    await helper.invokeMethodAsync('ScadaTestClick', tankImageLight.id);
    //});

    //var tankImage = document.getElementById("l1");
    //var tankImage = document.getElementById("l2");
    //var tankImage = document.getElementById("l3");

   
}