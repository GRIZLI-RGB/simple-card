$(function () {
    let flag = false;

    $(".card__top-hover-up-button").hover(
        function () {
            $(".card__top-hover-up-button").css("background-color", "#51985E");
            $(".card__top-hover-up-request").css("opacity", "1");
            $(".card__top-hover-up-request").css("pointer-events", "all");
            $(".card__bottom-availability").css("color", "#7D7D7D");
        },
        function () {
            // out
        },
    );

    $(".card__top-hover-up").hover(
        function () {
            // over
        },
        function () {
            if (!flag) {
                $(".card__top-hover-up-button").css("background-color", "#bfd4c3");
                $(".card__top-hover-up-request").css("opacity", "0");
                $(".card__top-hover-up-request").css("pointer-events", "none");
                $(".card__bottom-availability").css("color", "#51985e");
            }
        },
    );

    $(".card__top-hover-up").click(function (e) {
        if ($(".card__top-hover-up-request").css("opacity") == 1) {
            flag = !flag;
            if (flag) {
                $(".card__top-hover-down").css("z-index", "999");
                $(".card__top-hover-up-button").css("background-image", "url('./img/close.svg')");
            } else {
                $(".card__top-hover-down").css("z-index", "-999");
                $(".card__top-hover-up-button").css("background-image", "url('./img/request.svg')");
            }
        }
    });

    $(".card__top-extra div").hover(
        function () {
            let indexElement = $(this).index() + 1;
            let newSrc = "./img/jumper-" + indexElement + ".jpg";
            $(".card__top-image").attr("src", newSrc);
            $(".card__top-slides-item").removeClass("card__top-slides-item--active");
            $(".card__top-slides div").each(function (index, element) {
                if (index + 1 == indexElement) {
                    $(this).addClass("card__top-slides-item--active");
                }
            });
        },
        function () {
            newSrc = "./img/jumper-1.jpg";
            $(".card__top-image").attr("src", newSrc);
            $(".card__top-slides-item").removeClass("card__top-slides-item--active");
            $(".card__top-slides div").each(function (index, element) {
                if (index + 1 == 1) {
                    $(this).addClass("card__top-slides-item--active");
                }
            });
        },
    );
});
