using Microsoft.JSInterop;
using System.Diagnostics;

namespace BlazorAppASM;

/// <summary>
/// Static class dùng cho sự kiện onclick dùng trong ảnh SVG
/// </summary>
public static class ClickEventHandles
{
    /// <summary>
    /// Được gọi khi sự kiện onclick trong ảnh SVG gọi function js nó lại goi tới thằng này.
    /// </summary>
    /// <param name="id"></param>
    [JSInvokable]
    public static void Click(string id)
    {
        Debug.WriteLine($"Click: {id}");
    }
}
