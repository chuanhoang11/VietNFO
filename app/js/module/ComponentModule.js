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
      cir.style.transform = `translate(${
        translateX + "%" + "," + translateY + "%"
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
        const repDrop = $(this).find(".repDropJs")
        const repItem =$(this).find(".repDropJs .lib-cmt-item")
        const repTxt =$(this).find(".repTxtJs")

        cmtForm.slideUp(500);
        
        
        const repTxtNum = $(repTxt).find(".num")
        repTxtNum.text(repItem.length) 

        if(repItem.length > 1) {
          repDrop.slideUp(500);
        }else {
          $(repDrop).closest(".lib-cmt-item").find(".repTxtJs").css("display","none")
        }
      });

      const repJs = $(".repJS");
      const repTxt = $(".repTxtJs")

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
        const repDrop = repTxtItem.closest(".lib-cmt-item").find(".repDropJs")
        repTxtItem.on("click", ()=> {
          if (repDrop.css("display") === "none") {
            this.querySelector("img").style.transform = "rotate(-180deg)"
            repDrop.slideDown(500);
          } else {
            repDrop.slideUp(500);
            this.querySelector("img").style.transform = "rotate(0deg)"
          }
        })
      })
    }
  });
}
