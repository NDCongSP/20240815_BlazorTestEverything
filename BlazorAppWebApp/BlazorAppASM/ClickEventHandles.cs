using Microsoft.JSInterop;
using System.Diagnostics;

namespace BlazorAppASM;

public static class ClickEventHandles
{
    [JSInvokable]
    public static void Click(string id)
    {
        Debug.WriteLine($"Click: {id}");
    }
}
