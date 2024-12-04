export default function Select2Module() {
  $(document).ready(function () {
    var maxWidth = 0;
    $(".re-select-main option").each(function () {
      var optionWidth = $(this).text().length * 8;
      if (optionWidth > maxWidth) {
        maxWidth = optionWidth;
      }
    });

    $(".re-select-main").select2({
      width: maxWidth,
    });
  });
  //   select Custom
  $(document).ready(function () {
    const selectJS = document.querySelector(".selectJS");
    if (selectJS) {
      $(".getValue").click(function () {
        var newName = $(this).text();
        $(".displayName").text(newName);
      });
    }
    const toggleSelect = document.querySelector(".toggleSelect");
    const dropdownPanel = document.querySelector(".boxPanel");

    if (toggleSelect) {
      $(toggleSelect).click(function (e) {
        e.preventDefault();
        $(dropdownPanel).toggleClass("active");
      });
    }
    $(document).click(function (e) {
      if (!$(e.target).closest(toggleSelect).length) {
        $(dropdownPanel).removeClass("active");
      }
    });
  });
  //   $(".re-select-main").on("select2:open", function () {
  //     // Lấy chiều rộng của dropdown
  //     var dropdownWidth = $(this).data("select2").dropdown.$dropdown.outerWidth();

  //     // Lưu chiều rộng vào biến CSS --width-select2
  //     $(":root").css("--width-select2", dropdownWidth + "px");

  //     // (Tùy chọn) In ra console để kiểm tra chiều rộng
  //     console.log("Dropdown width:", dropdownWidth);
  //   });
  //   $(window).on("scroll", function () {
  //     $(".re-select-main").each(function () {
  //       if ($(this).data("select2").isOpen()) {
  //         $(this).select2("close");
  //       }
  //     });
  //   });

  const selectCusContainers = document.querySelectorAll(".selectCus");
  if (selectCusContainers) {
    selectCusContainers.forEach((container) => {
      const selectCusValue = container.querySelector(".selectCusValue");
      const selectCusOptions = container.querySelector(".selectCusOptions");
      const selectCusAll = container.querySelector(
        '.selectCusAll input[type="checkbox"]'
      );
      const optionCheckboxes = container.querySelectorAll(
        '.selectCusOption input[type="checkbox"]'
      );
      const applyButton = container.querySelector(".selectCusApply");
      const selectCusValueTxt = container.querySelector(".selectCusValue .txt");
      const selectCusValueTxtFirst = selectCusValueTxt.innerText;
      const hiddenInput = container.querySelector(
        '.selectCusValue input[type="text"]'
      );

      // Hiển thị/ẩn các tùy chọn khi click vào selectCusValue
      selectCusValue.addEventListener("click", (event) => {
        selectCusOptions.classList.toggle("show");
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
      });

      // Ẩn selectOptions khi click ra ngoài
      document.addEventListener("click", (event) => {
        if (
          !selectCusValue.contains(event.target) &&
          !selectCusOptions.contains(event.target)
        ) {
          selectCusOptions.classList.remove("show");
        }
      });
      // Xử lý nút "Chọn tất cả"
      if (selectCusAll) {
        selectCusAll.addEventListener("change", () => {
          const isChecked = selectCusAll.checked;
          optionCheckboxes.forEach((option) => (option.checked = isChecked));
          selectCusAll.parentElement.querySelector(".txt").innerText = isChecked
            ? "Bỏ chọn tất cả"
            : "Chọn tất cả";
        });
      }

      // Cập nhật trạng thái nút "Chọn tất cả" khi thay đổi tùy chọn riêng lẻ
      optionCheckboxes.forEach((option) => {
        option.addEventListener("change", () => {
          const allChecked = Array.from(optionCheckboxes).every(
            (opt) => opt.checked
          );
          selectCusAll.checked = allChecked;
          selectCusAll.parentElement.querySelector(".txt").innerText =
            allChecked ? "Bỏ chọn tất cả" : "Chọn tất cả";
        });
      });

      // Xử lý nút Áp dụng
      if (applyButton) {
        applyButton.addEventListener("click", () => {
          const selectedOptions = Array.from(optionCheckboxes)
            .filter((option) => option.checked)
            .map(
              (option) => option.parentElement.querySelector(".txt").innerText
            );

          selectCusValueTxt.innerText = selectedOptions.length
            ? selectedOptions.join(", ")
            : selectCusValueTxtFirst;
          hiddenInput.value = selectedOptions.join(", ");

          // Ẩn menu sau khi áp dụng
          selectCusOptions.classList.remove("show");
        });
      }
    });

    // ===========================
    const selectTwoContainer = document.querySelector(".selectTwo");
    if (selectTwoContainer) {
      const selectTwoValue =
        selectTwoContainer.querySelector(".selectTwoValue");
      const selectTwoOptions =
        selectTwoContainer.querySelector(".selectTwoOptions");
      const applyButton = selectTwoContainer.querySelector(".selectTwoApply");
      const selectTwoValueTxt = selectTwoContainer.querySelector(
        ".selectTwoValue .txt"
      );
      const selectTwoValueTxtFirst = selectTwoValueTxt.innerText
      const hiddenInput = selectTwoContainer.querySelector(
        '.selectTwoValue input[type="text"]'
      );
      const radioGroups = selectTwoContainer.querySelectorAll(
        '.selectTwoGr input[type="radio"]'
      );

      // Hiển thị/ẩn options khi click vào selectTwoValue
      selectTwoValue.addEventListener("click", (event) => {
        selectTwoOptions.classList.toggle("show");
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
      });

      // Ẩn options khi click ra ngoài
      document.addEventListener("click", (event) => {
        if (
          !selectTwoValue.contains(event.target) &&
          !selectTwoOptions.contains(event.target)
        ) {
          selectTwoOptions.classList.remove("show");
        }
      });
      if (applyButton) {
        // Xử lý khi nhấn nút "Áp dụng"
        applyButton.addEventListener("click", () => {
          // Tạo một object để lưu giá trị được chọn trong mỗi nhóm
          const selectedValues = {};

          // Duyệt qua các radio button để kiểm tra cái nào được chọn
          radioGroups.forEach((radio) => {
            if (radio.checked) {
              const groupName = radio.name; // Lấy tên nhóm radio
              const valueText =
                radio.parentElement.querySelector(".txt").innerText; // Lấy giá trị
              selectedValues[groupName] = valueText; // Lưu giá trị vào object
            }
          });

          // Nối các giá trị thành chuỗi với dấu gạch nối
          const finalValue = Object.values(selectedValues).join(" - ");

          // Cập nhật giá trị hiển thị và input ẩn
          selectTwoValueTxt.innerText = finalValue || selectTwoValueTxtFirst;
          hiddenInput.value = finalValue;

          // Ẩn menu sau khi áp dụng
          selectTwoOptions.classList.remove("show");
        });
      }
    }
  }

  $(".js-select2").select2({
    closeOnSelect : false,
    placeholder : "Placeholder",
    allowHtml: true,
    allowClear: true,
    tags: true,
    dropdownCssClass: "multi-dropdown",
  });
}
