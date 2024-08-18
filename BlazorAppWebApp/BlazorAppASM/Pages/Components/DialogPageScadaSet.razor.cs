using Microsoft.AspNetCore.Components;
using Radzen;

namespace BlazorAppASM.Pages.Components
{
    public partial class DialogPageScadaSet
    {
        //biến dùng để truyền vào khi gọi dialog từ form chính.
        [Parameter] public double CurrentSpeed { get; set; }

        string _value = string.Empty;

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            // _notificationService.Notify(new NotificationMessage
            //     {
            //         Severity = NotificationSeverity.Success,
            //         Summary = "Curent speed",
            //         Detail = CurrentSpeed.ToString(),
            //         Duration = 1000
            //     });

            // StateHasChanged();
        }

        void OnChange(string value, string name)
        {
            _value = value;
            // _notificationService.Notify(new NotificationMessage
            //     {
            //         Severity = NotificationSeverity.Info,
            //         Summary = name,
            //         Detail = value,
            //         Duration = 1000
            //     });

            // StateHasChanged();
        }

        async void SaveSetPoint(string value)
        {
            var confirm = await _dialogService.Confirm($"Are you sure saved the setpoint = {value}?", "Change set point.", new ConfirmOptions()
            {
                OkButtonText = "Yes",
                CancelButtonText = "No",
                AutoFocusFirstElement = true,
            });

            if (confirm == null || confirm == false) return;

            _dialogService.Close(value);
        }
    }
}
