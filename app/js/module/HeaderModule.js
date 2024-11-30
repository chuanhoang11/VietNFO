export default function HeaderModule() {
  const header = document.querySelector(".hd");
  const mobile = document.querySelector(".mobile");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const search = document.querySelector(".search-mona");
  const body = document.getElementsByTagName("body")[0];
  const banner = document.querySelector(".home-bn");
  function HandleHeader() {
    if (header && mobile && mobileOverlay) {
      if (banner) {
        const bannerRect = banner.getBoundingClientRect();
        const headerRect = banner.getBoundingClientRect();

        if (window.scrollY > bannerRect.bottom + headerRect.bottom) {
          header.classList.add("sticky");
          mobile.classList.add("sticky");
          mobileOverlay.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          mobile.classList.remove("sticky");
          mobileOverlay.classList.remove("sticky");
        }
      } else {
        if (window.scrollY > 0) {
          header.classList.add("sticky");
          mobile.classList.add("sticky");
          mobileOverlay.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          mobile.classList.remove("sticky");
          mobileOverlay.classList.remove("sticky");
        }
      }
    }
  }
  window.addEventListener("scroll", function () {
    HandleHeader();
  });
  $(document).ready(function () {
    HandleHeader();
  });

  var lastScrollTop = 0;
  var scrollDown = 0;

  window.addEventListener(
    "scroll",
    function () {
      let checkOntouch = document.querySelector(".no-touch");

      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("small");
        } else {
          header.classList.remove("small");
        }

        if (!checkOntouch) {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          var lt = 0;
          if (st >= 0 && st > lastScrollTop) {
            scrollDown = window.pageYOffset;
            // downscroll code
            header.classList.add("out");
            header.classList.remove("in");

            body.classList.add("out");
            body.classList.remove("in");
            lt = st;
          } else {
            if (scrollDown > window.pageYOffset + 140) {
              header.classList.remove("out");
              header.classList.add("in");

              body.classList.remove("out");
              body.classList.add("in");
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }
      }
    },
    false
  );
}
