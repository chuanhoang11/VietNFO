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
}
