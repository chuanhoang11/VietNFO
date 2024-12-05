export default function AdminBaseModule() {
    const hdsBurger = document.querySelector(".hds-burger")
    const sbar = document.querySelector(".sbar")
    const sbarOverLay = document.querySelector(".sbar-overlay")
    const sbarClose = document.querySelector(".sbar-close")



    if (hdsBurger) {
        hdsBurger.addEventListener("click", () => {
            sbarOverLay.classList.add("open")
            sbar.classList.add("open")
        })
    }
    if (sbarOverLay) {
        sbarOverLay.addEventListener("click", () => {
            sbarOverLay.classList.remove("open")
            sbar.classList.remove("open")
        })
    }
    if (sbarClose) {
        sbarClose.addEventListener("click", () => {
            sbarOverLay.classList.remove("open")
            sbar.classList.remove("open")
        })
    }
}