
using Microsoft.JSInterop;
using Radzen.Blazor;
using Radzen;
using System.Net.NetworkInformation;
using System.Reflection.Metadata;
using System.Timers;
using Microsoft.AspNetCore.Components;
using BlazorAppASM.Pages.Components;
using System.Linq.Dynamic.Core.Tokenizer;

namespace BlazorAppASM.Pages
{
    public partial class Scada : IDisposable
    {
        protected string _svg { get; set; }
        protected int _status = 0;
        protected double _speed = 0;
        protected double _setpointSpeed = 0;

        private System.Timers.Timer _timer;

        //cách để gọi sự kiện khi nhấn vào vị trí bất kỳ của ảnh trên web
        private IJSObjectReference? module;
        private DotNetObjectReference<Scada>? objRef;
        private ElementReference elementRef;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                module = await _jsRuntime.InvokeAsync<IJSObjectReference>("import", "./js/scada.js");
                objRef = DotNetObjectReference.Create(this);

                await module.InvokeVoidAsync("assignDotNetHelper", elementRef, objRef);
                await module.InvokeVoidAsync("addHandlers", elementRef);
            }
        }

        /// <summary>
        /// Method dc gọi ở trong JS event call back. scada.js
        /// </summary>
        /// <param name="id"></param>
        [JSInvokable]
        public async void ScadaTestClick(string id)
        {
            _notificationService.Notify(new NotificationMessage
            {
                Severity = NotificationSeverity.Info,
                Summary = $"You just pressed {id}",
                Detail = id,
                Duration = 1000
            });

            if (id == "tspan_txtMotorSetSpeed")
            {
                var res = await _dialogService.OpenAsync<DialogPageScadaSet>($"Set Speed",
                        new Dictionary<string, object>() { { "CurrentSpeed", _setpointSpeed } },
                        new DialogOptions() { Width = "500", Height = "300px", Resizable = true, Draggable = true, CloseDialogOnOverlayClick = true });

                if (string.IsNullOrEmpty(res))
                {
                    _notificationService.Notify(new NotificationMessage
                    {
                        Severity = NotificationSeverity.Warning,
                        Summary = "Set point not change.",
                        Detail = res,
                    });
                }
                else
                {
                    _notificationService.Notify(new NotificationMessage
                    {
                        Severity = NotificationSeverity.Success,
                        Summary = "Set point success.",
                        Detail = res,
                    });

                    _setpointSpeed = double.TryParse(res, out double value) ? value : 0;

                    await _jsRuntime.InvokeVoidAsync("ChangeValue", "tspan_txtMotorSetSpeed", _setpointSpeed);
                }
            }
            StateHasChanged();
        }


        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            using var stream = this.GetType().Assembly.GetManifestResourceStream("BlazorAppASM.resource.scada.svg");

            stream.Seek(0, SeekOrigin.Begin);
            StreamReader reader = new StreamReader(stream);
            _svg = reader.ReadToEnd();


            await _jsRuntime.InvokeVoidAsync("ChangeValue", "tspan_txtMotorSetSpeed", _setpointSpeed);

            #region Timer refresh data
            _timer = new System.Timers.Timer(1000);
            _timer.Elapsed += RefreshData;
            _timer.Enabled = true;
            #endregion
        }

        private async void RefreshData(object? sender, ElapsedEventArgs e)
        {
            //try
            {
                await _jsRuntime.InvokeVoidAsync("UpdateUI", _status, Math.Round(_speed, 2));

                if (_status < 2) _status += 1;
                else _status = 0;

                if (_speed <= _setpointSpeed) _speed += 10.3;
                else _speed = 0;

                StateHasChanged(); // NOTE: MUST CALL StateHasChanged() BECAUSE THIS IS TRIGGERED BY A TIMER INSTEAD OF A USER EVENT
            }
            //catch { }
        }

        public void Dispose()
        {
            _timer.Dispose();
        }

        async ValueTask IAsyncDisposable.DisposeAsync()
        {
            _timer?.Dispose();

            if (module is not null)
            {
                await module.DisposeAsync();
            }

            objRef?.Dispose();
        }
    }
}
