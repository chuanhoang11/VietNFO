export default function ToggleSwitchModule() {
     $('.switch-input').on('change', function () {
        const statusText = $(this).closest('.admin-action').find('.switch-status');
        const isChecked = $(this).is(':checked');
        statusText.text(isChecked ? 'On' : 'Off');
    });

    $('.switch-input').each(function () {
        const statusText = $(this).closest('.admin-action').find('.switch-status');
        const isChecked = $(this).is(':checked');
        statusText.text(isChecked ? 'On' : 'Off');
    });
}
