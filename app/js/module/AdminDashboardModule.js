export default function AdminDashboardModule() {
  //===========  JS Table
  $(document).ready(function () {
    function applyResponsiveCollapse() {
      if (window.innerWidth <= 1250) {
        $('.das-table-row').each(function () {
          if (!$(this).find('.das-cell').first().hasClass('das-cl-head')) {
            const firstCell = $(this).find('.das-cell').first();
            firstCell.addClass('das-cl-head');
            const otherCells = $(this).find('.das-cell').not(':first');
            otherCells.wrapAll('<div class="das-cl-body"></div>');
          }
        });
      } else {
        $('.das-cl-head').removeClass('das-cl-head');
        $('.das-cl-body').children().unwrap();
        $('.das-table-row').removeClass('active'); 
      }
    }

    applyResponsiveCollapse(); 

    $(window).resize(function () {
      applyResponsiveCollapse(); 
    });


    $(document).on('click', '.das-cl-head .icon-arr ', function () {
      const $row = $(this).closest('.das-table-row'); // Lấy table-row chứa collapse-head
      $row.toggleClass('active'); // Thêm/loại bỏ class active

      // Toggle collapse-body
      // $(this).next('.das-cl-body').slideToggle();
      $(this).closest('.das-cell').next('.das-cl-body').slideToggle();
    });
  });

}
