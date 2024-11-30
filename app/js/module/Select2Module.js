export default function Select2Module() {
  $(document).ready(function () {
    $(".re-select-main").select2();
  });

  $(window).on("scroll", function () {
    $(".re-select-main").each(function () {
      if ($(this).data("select2").isOpen()) {
        $(this).select2("close");
      }
    });
  });
  document.getElementById("select-btn").addEventListener("click", function () {
    const selectOptions = document.getElementById("select-options");
    selectOptions.classList.toggle("show");
    updateButtonText();
  });

  document.getElementById("select-all").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".select-options .option");
    const allSelected = Array.from(checkboxes).every(
      (checkbox) => checkbox.checked
    );

    checkboxes.forEach((checkbox) => {
      checkbox.checked = !allSelected;
    });

    updateButtonText();
  });

  document.getElementById("apply-btn").addEventListener("click", function () {
    const selectedOptions = [];
    const checkboxes = document.querySelectorAll(
      ".select-options .option:checked"
    );
    checkboxes.forEach((checkbox) => {
      selectedOptions.push(checkbox.value);
    });

    const selectBtn = document.getElementById("select-btn");
    selectBtn.textContent =
      selectedOptions.length > 0 ? selectedOptions.join(", ") : "Chọn lựa chọn";

    document.getElementById("select-options").classList.remove("show");
  });

  function updateButtonText() {
    const selectedOptions = [];
    const checkboxes = document.querySelectorAll(
      ".select-options .option:checked"
    );
    checkboxes.forEach((checkbox) => {
      selectedOptions.push(checkbox.value);
    });
    const selectBtn = document.getElementById("select-btn");
    selectBtn.textContent =
      selectedOptions.length > 0 ? selectedOptions.join(", ") : "Chọn lựa chọn";
  }

  document.querySelectorAll(".select-options .option").forEach((checkbox) => {
    checkbox.addEventListener("change", updateButtonText);
  });
}
