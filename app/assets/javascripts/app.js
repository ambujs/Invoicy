$(document).ready(function () {
    $("a.select-format-button, a.select-template-button").click(function (event) {
        event.preventDefault();

        var div = $(this).parent().parent().find("div.portfolio-image").addClass("portfolio-image-selected");
        $(this).parent().parent().siblings().find("div.portfolio-image").removeClass("portfolio-image-selected");

    });
});