export default function DatePickerModule() {
    let tomorrow = new Date(new Date().valueOf() + 1000 * 3600 * 24);
    let tomorrow_after = new Date(new Date().valueOf() + 2000 * 3600 * 24);
    let today = new Date();
    const dateTimePicker = document.querySelectorAll('.dateTime')
    if (dateTimePicker) {
        dateTimePicker.forEach(item => {
            const openTimePickerInput = item.querySelector(".dateTimeInput");
            const openTimePickerText = item.querySelector(".dateTimeText");
            const openTimeItem = item.querySelectorAll(".dateTimeItem");
            const dataMin = item.getAttribute('data-min')
            const dataType = item.getAttribute('data-type')
            const dataFormatValue = item.getAttribute('data-format-value')
            const dataFormatView = item.getAttribute('data-format-view')

            let minDay = today;
            let type = true;
            let formatValue = "DD/MM/YYYY";
            let formatView = "DD/MM/YYYY";
            let isShowYear = false;

            // -----------
            if (dataFormatValue) {
                formatValue = dataFormatValue
            }
            if (dataFormatView) {
                formatView = dataFormatView
            }
            if (dataType == "single") {
                type = true
            } else
                if (dataType == "double") {
                    type = false
                } else {
                    type = true
                }
            if (dataMin != "" && dataMin) {
                if (dataMin == "tomorrow") {
                    minDay = tomorrow
                } else if (dataMin == "tomorrow_after") {
                    minDay = tomorrow_after;
                } else {
                    minDay = dataMin
                }
            } else {
                minDay = today;
            }

            $(openTimeItem).daterangepicker({
                minDate: minDay,
                autoApply: true,
                autoUpdateInput: true,
                timePicker: false,
                alwaysShowCalendars: true,
                singleDatePicker: type,
                showDropdowns: isShowYear,
                startDate: moment().startOf('hour'),
                endDate: moment().startOf('hour').add(32, 'hour'),
                locale: {
                    format: formatValue,
                    separator: " - "
                }
            });
            $(openTimeItem).on("apply.daterangepicker", function (ev, picker) {
                if (type) {
                    openTimePickerText.classList.add("disable")
                    openTimePickerInput.value = picker.startDate.format(formatValue);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        picker.startDate.format(formatValue)
                    );
                    $(openTimePickerText).html(picker.startDate.format(formatView));
                    // checkValue();
                } else {
                    openTimePickerText.classList.add("disable")
                    // $(`input[name="arrivaldate"]`).attr('value', `${picker.startDate.format(formatValue)}`)
                    // $(`input[name="departuredate"]`).attr('value', `${picker.endDate.format(formatValue)}`)
                    $(openTimePickerText).html(`${picker.startDate.format(formatView)}-${picker.endDate.format(formatView)}`);
                    openTimePickerInput.setAttribute(
                        "data-time",
                        `${picker.startDate.format(formatView)} - ${picker.endDate.format(formatView)}`
                    );
                    // checkValue();
                }

            });
            // checkValue();

        })
    }
    $('input[name="datetimes"]').daterangepicker({
        parentEl: '.admin-dropdown-datepicker',
        autoUpdateInput: false, // Ban đầu không tự động cập nhật
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        maxYear: parseInt(moment().format('YYYY'), 10),
        locale: {
            cancelLabel: 'Clear', // Để placeholder hiển thị sau khi clear
            format: 'MM/DD/YYYY' // Định dạng ngày
        }
    }, function (start, end, label) {
        $('.daterangepicker .drp-calendar').addClass('admin-datepicker');
        var years = moment().diff(start, 'years');
    });

    // Cập nhật input khi chọn
    $('input[name="datetimes"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY')); // Thay đổi định dạng tùy ý
    });
}