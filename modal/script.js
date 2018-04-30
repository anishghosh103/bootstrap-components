$("button").click(function() {
    let dataToggle = $(this).data("toggle");
    let dataDismiss = $(this).data("dismiss");

    if (dataToggle && dataToggle === "modal") {
        let target = $($(this).data("target"));
        if (target.hasClass("modal") === false) return;
        $("body").css("overflow", "hidden");

        target.css({ "display": "flex" });
        target.scrollTop(0);
        setTimeout(() => target.css("opacity", "1"), 0);
    }

    if (dataDismiss && dataDismiss === "modal") {
        $(this).parents().each(function() {
            if ($(this).hasClass("modal")) {
                $(this).css("opacity", "0");
                setTimeout(() => {
                    $(this).css("display", "none");
                    $("body").css("overflow", "auto");
                }, 200);
                return false;
            }
        });
    }
});

$(".modal").click(function(e) {
    if (e.target.classList.contains("modal")) {
        $(this).css("opacity", "0");
        setTimeout(() => {
            $(this).css("display", "none");
            $("body").css("overflow", "auto");
        }, 200);
    }
});