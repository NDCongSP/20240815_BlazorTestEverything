
using Microsoft.JSInterop;
using Radzen.Blazor;
using Radzen;
using System.Net.NetworkInformation;
using System.Reflection.Metadata;
using System.Timers;

namespace BlazorAppASM.Pages
{
    public partial class Scada:IDisposable
    {
        protected string _svg { get; set; }
        protected int _status = 0;
        protected double _speed = 0;

        private System.Timers.Timer _timer;

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            using var stream = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.images.scada.svg");
            //using var stream = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.images.bitmapLayout.svg");
            stream.Seek(0, SeekOrigin.Begin);
            StreamReader reader = new StreamReader(stream);
            _svg = reader.ReadToEnd();

            #region Timer refresh data
            _timer = new System.Timers.Timer(1000);
            _timer.Elapsed += RefreshData;
            _timer.Enabled = true;
            #endregion
        }

        private async void OnClick(string text)
        {
            await _jsRuntime.InvokeVoidAsync("UpdateUI", _status, "Công Nguyễn");

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

        private async void RefreshData(object? sender, ElapsedEventArgs e)
        {
            //try
            {
                await _jsRuntime.InvokeVoidAsync("UpdateUI", _status, _speed);

                if (_status < 2) _status += 1;
                else _status = 0;

                if (_speed < 1000) _speed += 10.3;
                else _speed = 0;

                StateHasChanged(); // NOTE: MUST CALL StateHasChanged() BECAUSE THIS IS TRIGGERED BY A TIMER INSTEAD OF A USER EVENT
            }
            //catch { }
        }

        public void Dispose()
        {
            _timer.Dispose();
        }
    }
}
