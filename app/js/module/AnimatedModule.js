export default function AnimatedModule() {
    let $window = $(window);

    function scrollAddClass(el, className) {
        $(el).each(function () {
            let el = this;
            if (
                $(el).offset().top <
                $window.scrollTop() + ($window.height() / 10) * 8
            ) {
                $(el).addClass(className);
            }
        });
    }

    function bindImageAnimations() {
        scrollAddClass(".scroll-item", "is-inview");

        $window.on("scroll", function () {
            scrollAddClass(".scroll-item", "is-inview");
        });
    }
    bindImageAnimations();

    let moveItems = document.querySelectorAll('.move-item');
    let height = window.innerHeight;
    if (moveItems.length > 0 && window.innerWidth > 1200) {
        window.addEventListener('scroll', () => {
            moveItems.forEach((item) => {
                let pos = item.getBoundingClientRect().top;
                if (pos > -height / 2 && pos < height) {
                    let Y = (pos / height * 100);
                    if (item.classList.contains("mx")) {
                        item.style.transform = `translateX(` + Y + `px)`;
                    } else {
                        item.style.transform = `translateY(` + Y + `px)`;
                    }
                }
            });
        });
    }


    //Scroll Percent page
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            scrollProgress();
        }
    });

    function scrollProgress() {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        let height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        const progress = document.querySelector(".header-progress")
        if (progress) {
            progress.style.width = scrolled + "%";
        }
    }
    scrollProgress();
}