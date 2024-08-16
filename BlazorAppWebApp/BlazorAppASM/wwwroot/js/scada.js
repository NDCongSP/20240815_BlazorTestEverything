export function assignDotNetHelper(element, dotNetHelper) {
    element.dotNetHelper = dotNetHelper;
}

export function addHandlers(element) {
    var helper = element.dotNetHelper;
    var tankImage = document.getElementById("tank");
    console.log(element.dotNetHelper)
    tankImage.addEventListener("click", async () => {
        await helper.invokeMethodAsync('ScadaTestClick', tankImage.id);
    });
}