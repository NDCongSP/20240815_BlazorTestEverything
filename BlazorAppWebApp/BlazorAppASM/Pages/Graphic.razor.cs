using Microsoft.JSInterop;
using Radzen;
using System.Reflection;

namespace BlazorAppASM.Pages
{
    public partial class Graphic
    {
        private string _svg, _svg1, _svgMotor;
        private int _status = 0;

        protected override void OnInitialized()
        {
            using var stream = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.resource.bitmapLayout.svg");
            stream.Seek(0, SeekOrigin.Begin);
            StreamReader reader = new StreamReader(stream);
            _svg = reader.ReadToEnd();

            using var stream1 = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.resource.twogears.svg");
            stream1.Seek(0, SeekOrigin.Begin);
            StreamReader reader1 = new StreamReader(stream1);
            _svg1 = reader1.ReadToEnd();

            using var stream2 = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.resource.motor.svg");
            stream1.Seek(0, SeekOrigin.Begin);
            reader1 = new StreamReader(stream2);
            _svgMotor = reader1.ReadToEnd();

            base.OnInitialized();
        }

        private async void OnClick(string text)
        {
            await _jsRuntime.InvokeVoidAsync("BlazorChange1", "conveterQuang", _status);

            if (_status < 2) _status += 1;
            else _status = 0;

            //_notificationService.Notify(new NotificationMessage
            //{
            //    Severity = NotificationSeverity.Info,
            //    Summary = "Info",
            //    Detail = text,
            //    Duration = 2000
            //});
        }

        string ToCaseSensitiveResourceName(string caseInsensitiveName)
        {
            // caseInsensitiveName is "Foo.xml".
            // The assembly contains the embedded file 'foo.xml'.
            var assembly = Assembly.GetExecutingAssembly();
            var names = assembly.GetManifestResourceNames();

            foreach (var name in names)
            {
                if (String.Equals(name, caseInsensitiveName, StringComparison.InvariantCultureIgnoreCase))
                {
                    return name;
                }
            }

            return null;
        }
    }
}
