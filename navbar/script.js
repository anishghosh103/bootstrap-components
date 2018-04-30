$(".navbar .navbar-toggler").click(function() {
    let targetElement = $($(this).data("target"));

    if (targetElement.height() === 0) {
        let totalChildrenHeight = 0;
        targetElement.children().each(function() {
            totalChildrenHeight += $(this).outerHeight(true);
        });

        targetElement.height(totalChildrenHeight);
    } else {
        targetElement.css({ "height": "0" });
    }
});

$(window).resize(function() {
    $(".navbar .navbar-toggler").each(function() {
        if ($(this).css("display") === "none") {
            $(this).parent().find(".collapse").removeAttr("style");
        }
    });
});