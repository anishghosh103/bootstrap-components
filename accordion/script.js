$(document).ready(() => {
    $(".accordion .item .header").click(function() {
        $(".accordion .item.default").removeClass("default");

        let targetElement = $(this).data("target");

        let collapse = (target) => {
            if ($(target).prop("style").height === "auto") {
                $(target).height($(target).find(".content").innerHeight());
            }
            $(target).css({ "height": "0" });
        };

        if ($(targetElement).hasClass("collapse")) {

            $(this).parent().siblings().each((index, elem) => {
                let targetElement = $(elem).find(".header").data("target");
                if ($(targetElement).hasClass("collapse")) {
                    collapse(targetElement);
                }
            });

            if ($(targetElement).height() === 0) {
                $(targetElement).height($(targetElement).find(".content").innerHeight());
                setTimeout(() => $(targetElement).css({ "height": "auto" }), 200);
            } else {
                collapse(targetElement);
            }

        }
    });

    $(document).ready(function() {
        $(".accordion .item.default .collapse").height($(this).find(".content").innerHeight());
    });

    $(window).resize(function() {
        $(".accordion .item .collapse").each(function() {
            if ($(this).height() !== 0) {
                $(this).height($(this).find(".content").innerHeight());
            }
        });
    });
});