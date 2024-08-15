using Microsoft.JSInterop;
using Radzen;

namespace BlazorAppASM.Pages
{
    public partial class Graphic
    {
        private string _svg;
        private int _status = 0;

        protected override void OnInitialized()
        {
            using var stream = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.images.bitmapLayout.svg");
            stream.Seek(0, SeekOrigin.Begin);
            StreamReader reader = new StreamReader(stream);
            _svg = reader.ReadToEnd();
            base.OnInitialized();
        }

        private async void OnClick(string text)
        {
            await _jsRuntime.InvokeVoidAsync("BlazorChange1", "conveterQuang", _status);

            if (_status < 2) _status += 1;
            else _status = 0;

            _notificationService.Notify(new NotificationMessage
            {
                Severity = NotificationSeverity.Info,
                Summary = "Error",
                Detail = text,
                Duration = 2000
            });
        }
    }
}
