export default function gallery() {
  $(".gallery").each(function () {
    const $this = $(this);
    const $item = $this.find(".gItem");
    $(function () {
      $this.lightGallery({
        selector: $item,
        thumbnail: true,
        zoom: true,
      });
    });
  });
  const galContainer = document.querySelectorAll(".gallery-container");
  if (galContainer) {
    galContainer.forEach((item) => {
      const openGal = item.querySelector(".open-gallery");
      if (openGal) {
        openGal.addEventListener("click", () => {
          const imgs = item.querySelectorAll(".gItem");
          imgs[0].click();
        });
      }
    });
  }
}
