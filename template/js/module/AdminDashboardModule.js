export default function AdminDashboardModule() {
  //===========  JS Table
  $(document).ready(function () {
    function applyResponsiveCollapse() {
      if ($(window).width() <= 1250) {
        $('.das-table-row').each(function () {
          if (!$(this).find('.das-cell').first().hasClass('das-cl-head')) {
            const firstCell = $(this).find('.das-cell').first();
            firstCell.addClass('das-cl-head');
            const otherCells = $(this).find('.das-cell').not(':first');
            otherCells.wrapAll('<div class="das-cl-body"></div>');
          }
        });
      } else {
        // Xóa các class khi màn hình lớn hơn 600px
        $('.das-cl-head').removeClass('das-cl-head');
        $('.das-cl-body').children().unwrap();
        $('.das-table-row').removeClass('active'); // Remove 'active' class
      }
    }

    applyResponsiveCollapse(); // Gọi hàm khi load trang

    $(window).resize(function () {
      applyResponsiveCollapse(); // Gọi hàm khi thay đổi kích thước cửa sổ
    });

    // Toggle collapse-body khi nhấn vào collapse-head
    $(document).on('click', '.das-cl-head', function () {
      const $row = $(this).closest('.das-table-row'); // Lấy table-row chứa collapse-head
      $row.toggleClass('active'); // Thêm/loại bỏ class active

      // Toggle collapse-body
      $(this).next('.das-cl-body').slideToggle();
    });
  });

}
