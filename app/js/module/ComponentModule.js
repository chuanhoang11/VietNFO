export default function ComponentModule() {
  // Funtion Copppy
  const btnCoppy = document.querySelectorAll(".center-control-btn.coppy-link");
  if (btnCoppy) {
    btnCoppy.forEach((item) => {
      item.addEventListener("click", (e) => {
        btnCoppy.forEach((item2) => {
          item2.querySelector(".text").innerHTML =
            item.getAttribute("data-csc");
          item2.classList.remove("active");
        });
        e.preventDefault();
        const value = item.href;
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
        item.querySelector(".text").innerHTML = item.getAttribute("data-dsc");
        item.classList.add("active");
      });
    });
  }
  // Funtion Download pdf
  //  const btnDownload = document.querySelectorAll('.docs-wrap')
  //  if (btnDownload) {
  //      btnDownload.forEach(item => {
  //          item.addEventListener('click', (e) => {
  //              e.preventDefault();
  //              var link = document.createElement('a');
  //              link.href = item.getAttribute('data-src');
  //              link.download = 'file.pdf';
  //              link.dispatchEvent(new MouseEvent('click'));
  //          })
  //      })
  //  }

  // Js get height item

  function getHeight() {
    const getHeightItems = document.querySelectorAll(".getHeight");
    if (getHeightItems) {
      getHeightItems.forEach((item) => {
        item.style = `--height:${item.getBoundingClientRect().height}px`;
      });
    }
  }
  getHeight();

  // Js get width item
  function getWidth() {
    const getWidthItems = document.querySelectorAll(".getWidth");
    if (getWidthItems) {
      getWidthItems.forEach((item) => {
        item.style = `--width:${item.getBoundingClientRect().width}px`;
      });
    }
  }
  getWidth();
  window.addEventListener("resize", () => {
    getHeight();
    getWidth();
  });

  // AUTO MOVE
  const cirs = document.querySelectorAll(".cir");
  var timer = Array;

  function randomXY(cir, x, y) {
    if (!x) {
      x = 10;
    }
    if (!y) {
      y = 15;
    }
    if (cir.classList.contains("cir-2")) {
      const translateX = Math.floor(Math.random() * x);
      const translateY = Math.floor(Math.random() * y);
      cir.style.transform = `translate(${translateX + "%" + "," + translateY + "%"
        })`;
    } else {
      // const translateX = Math.floor(Math.random() * 10);
      const translateY = Math.floor(Math.random() * y);
      // cir.style.transform = `translate(${translateX + "%" + "," + translateY + "%"})`;
      cir.style.transform = `translate(${0 + "%" + "," + -translateY + "%"})`;
    }
  }
  for (let i = 0; i < cirs.length; i++) {
    let time = (i % 3) * 200 + 1500;
    const x = parseInt(cirs[i].getAttribute("data-x"));
    const y = parseInt(cirs[i].getAttribute("data-y"));
    timer[i] = setInterval(() => {
      randomXY(cirs[i], x, y);
    }, time);
  }

  $(document).ready(function () {
    const cmt = $(".cmtJS");
    if (cmt.length) {
      const cmtItem = cmt.find(".lib-cmt-item");
      cmtItem.each(function () {
        const cmtForm = $(this).find(".lib-cmt-f");
        const cmtChild = $(this).find(".lib-cmt-child");
        const repDrop = $(this).find(".repDropJs");
        const repItem = $(this).find(".repDropJs .lib-cmt-item");
        const repTxt = $(this).find(".repTxtJs");

        cmtForm.slideUp(500);

        const repTxtNum = $(repTxt).find(".num");
        repTxtNum.text(repItem.length);

        if (repItem.length > 1) {
          repDrop.slideUp(500);
        } else {
          $(repDrop)
            .closest(".lib-cmt-item")
            .find(".repTxtJs")
            .css("display", "none");
        }
      });

      const repJs = $(".repJS");
      const repTxt = $(".repTxtJs");

      repJs.each(function () {
        const repItem = $(this);
        const repForm = repItem.closest(".lib-cmt-rep").find(".lib-cmt-f");
        repItem.on("click", () => {
          $(".lib-cmt-f").slideUp(500);
          if (repForm.css("display") === "none") {
            repForm.slideDown(500);
          } else {
            repForm.slideUp(500);
          }
        });
      });

      repTxt.each(function () {
        const repTxtItem = $(this);
        const repDrop = repTxtItem.closest(".lib-cmt-item").find(".repDropJs");
        repTxtItem.on("click", () => {
          if (repDrop.css("display") === "none") {
            this.querySelector("img").style.transform = "rotate(-180deg)";
            repDrop.slideDown(500);
          } else {
            repDrop.slideUp(500);
            this.querySelector("img").style.transform = "rotate(0deg)";
          }
        });
      });
    }
  });

  if (window.innerWidth < 700) {
    const selectJS = document.querySelectorAll(".selectJS");
    if (selectJS) {
      selectJS.forEach((item) => {
        const selectJSHead = item.querySelector(".selectJSHead");
        const selectJSTxt = item.querySelector(".selectJSTxt");
        const selectJSItem = item.querySelectorAll(".selectJSItem");
        if (selectJSItem) {
          selectJSHead.addEventListener("click", () => {
            item.classList.toggle("active");
          });
        }

        if (selectJSItem) {
          selectJSItem.forEach((item) => {
            if (item.classList.contains("active")) {
              selectJSTxt.innerHTML = item.innerHTML;
            }
            item.addEventListener("click", () => {
              selectJSItem.forEach((item) => {
                item.classList.remove("active");
              });
              item.classList.add("active");
              selectJSTxt.innerHTML = item.innerHTML;
              item.closest(".selectJS").classList.remove("active");
            });
          });
        }
      });
      window.addEventListener("click", (e) => {
        if (!e.target.closest(".selectJS")) {
          const selectJS = document.querySelectorAll(".selectJS");
          if (selectJS) {
            selectJS.forEach((item) => {
              item.classList.remove("active");
            });
          }
        }
      });
    }
  }
  const selectJS = document.querySelector(".selectJS");
  if (selectJS) {
    function scrollToActiveItem() {
      const container = document.querySelector(".pro-calendar.selectJS");
      if (container) {
        const activeItem = container.querySelector(".selectJSItem.active");
        if (!activeItem) return;
        // Tính toán vị trí của phần tử active
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeItem.getBoundingClientRect();

        // Tính khoảng cách cần cuộn để đưa activeItem vào giữa container
        const offset =
          activeRect.top -
          containerRect.top -
          container.clientHeight / 2 +
          activeItem.clientHeight / 2;

        // Cuộn container đến vị trí
        smoothScroll(container, container.scrollTop + offset, 500); // 500ms là thời gian cuộn
      }
    }
    scrollToActiveItem();

    // Hàm cuộn mượt
    function smoothScroll(element, target, duration) {
      const start = element.scrollTop; // Vị trí hiện tại
      const distance = target - start; // Khoảng cách cần cuộn
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime; // Gán thời điểm bắt đầu
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Tiến trình (từ 0 đến 1)

        element.scrollTop = start + distance * easeInOutQuad(progress); // Cập nhật vị trí scroll

        if (progress < 1) {
          requestAnimationFrame(step); // Tiếp tục cuộn nếu chưa xong
        }
      }

      requestAnimationFrame(step);
    }

    // Hàm easing (mượt mà hơn)
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    // tạo function  từ đoạn code được comment ở trên
    function handleSelectMonth() {
      const container = document.querySelector(".selectJSBody");
      if (!container) return;
      const listItems = container.querySelectorAll(".selectJSItem");
      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          container
            .querySelector(".selectJSItem.active")
            ?.classList.remove("active");
          item.classList.add("active");
          scrollToActiveItem();
        });
      });
      scrollToActiveItem();
    }
    handleSelectMonth();
  }
  const rangeInputs = document.querySelectorAll(".range-input input");
  const progress = document.querySelector(".range-slider .progress");
  const priceMin = document.querySelector(".range-item.min .price");
  const priceMax = document.querySelector(".range-item.max .price");
  const rangeApplyButton = document.querySelector(".range-apply");
  const rangeValueInput = document.querySelector(".rangeValue");
  const textValueElement = document.querySelector(".rangeTextValue");
  const rangePanel = document.querySelector(".range-panel");
  const rangeHead = document.querySelector(".range-head");

  let priceGap = 0;

  function formatCurrency(value) {
    return value
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
      .replace(/\.00$/, "");
  }

  if (rangeInputs && progress) {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);

    priceMin.innerHTML = formatCurrency(minVal);
    priceMax.innerHTML = formatCurrency(maxVal);

    progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
    progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";

    rangeInputs.forEach((item) => {
      item.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);
        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInputs[0].value = maxVal - priceGap;
          } else {
            rangeInputs[1].value = minVal + priceGap;
          }
        } else {
          progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
          progress.style.right =
            100 - (maxVal / rangeInputs[1].max) * 100 + "%";
        }
      });
    });

    rangeInputs[0].addEventListener("input", () => {
      let minVal = parseInt(rangeInputs[0].value);

      priceMin.innerHTML = formatCurrency(minVal);
    });

    rangeInputs[1].addEventListener("input", () => {
      let maxVal = parseInt(rangeInputs[1].value);

      priceMax.innerHTML = formatCurrency(maxVal);
    });

    if (rangeApplyButton && rangeValueInput && textValueElement) {
      rangeApplyButton.addEventListener("click", () => {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);

        rangeValueInput.value = `${minVal} - ${maxVal}`;

        textValueElement.innerHTML = `${formatCurrency(
          minVal
        )} - ${formatCurrency(maxVal)}`;

        rangePanel.classList.remove("show");
      });
    }

    if (rangeHead) {
      rangeHead.addEventListener("click", () => {
        rangePanel.classList.toggle("show");
      });
    }
    document.addEventListener("click", (e) => {
      if (!rangePanel.contains(e.target) && !rangeHead.contains(e.target)) {
        rangePanel.classList.remove("show");
      }
    });
  }

  //  JS Table

  $(document).ready(function () {
    function applyResponsiveCollapse() {
      if ($(window).width() <= 950) {
        $('.table-row').each(function () {
          if (!$(this).find('.cell').first().hasClass('cl-head')) {
            const firstCell = $(this).find('.cell').first();
            firstCell.addClass('cl-head');
            const otherCells = $(this).find('.cell').not(':first');
            otherCells.wrapAll('<div class="cl-body"></div>');
          }
        });
      } else {
        // Xóa các class khi màn hình lớn hơn 600px
        $('.cl-head').removeClass('cl-head');
        $('.cl-body').children().unwrap();
        $('.table-row').removeClass('active'); // Remove 'active' class
      }
    }

    applyResponsiveCollapse(); // Gọi hàm khi load trang

    $(window).resize(function () {
      applyResponsiveCollapse(); // Gọi hàm khi thay đổi kích thước cửa sổ
    });

    // Toggle collapse-body khi nhấn vào collapse-head
    $(document).on('click', '.cl-head', function () {
      const $row = $(this).closest('.table-row'); // Lấy table-row chứa collapse-head
      $row.toggleClass('active'); // Thêm/loại bỏ class active

      // Toggle collapse-body
      $(this).next('.cl-body').slideToggle();
    });
  });

  // ================= JS Drop File
  const fileInput = document.getElementById('fileInput');
  const dropArea = document.getElementById('dropArea');
  const fileList = document.getElementById('fileList');
  if (fileInput && dropArea && fileList) {
    // Mở cửa sổ chọn file khi nhấn vào "chọn file"

    // Xử lý sự kiện khi chọn file từ input
    fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

    // Kéo file vào drop area
    dropArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropArea.classList.add('drag-over');
    });

    dropArea.addEventListener('dragleave', () => {
      dropArea.classList.remove('drag-over');
    });

    // Xử lý khi thả file
    dropArea.addEventListener('drop', (e) => {
      e.preventDefault();
      dropArea.classList.remove('drag-over');
      handleFiles(e.dataTransfer.files);
    });

    // Hàm xử lý file
    function handleFiles(files) {
      fileList.innerHTML = ''; // Xóa danh sách cũ
      Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
      });
    }
  }
  // ================== JS PW
  const signPws = document.querySelectorAll(".signPW")
  console.log(signPws.innerHTML);

  if (signPws) {
    signPws.forEach(signPw => {
      let clicked = false
      document.addEventListener("click", (e) => {
        if (signPw.contains(e.target)) {
          const signIp = signPw.closest(".form-ip").querySelector("input")

          if (clicked == false) {
            signPw.classList.add("clicked")
            signIp.setAttribute("type", "text")
            clicked = true
          }
          else {
            signPw.classList.remove("clicked")
            signIp.setAttribute("type", "password")
            clicked = false;
          }
        }
      })
    })
  }
}
