//==== Show More Gallery Items --------
$(".gallery-wrapper .gallery-item").hide();
$(".gallery-wrapper .gallery-item:nth-child(n+1):nth-child(-n+6)").show();

$(".button--load-more").click(function () {
    $(this)
        .closest(".gallery-outter")
        .find(".gallery-item:not(:visible):lt(3)")
        .slideDown();
    $(this).closest(".gallery-outter").find(".button--show-less").show();
});

$(".button--show-less").click(function () {
    $(this)
        .closest(".gallery-outter")
        .find(".gallery-item")
        .not(":lt(6)")
        .slideUp();
    $(this).hide();
});

//==== Ellipsis -----------------------
$(".ellipsis").ellipsis();

//==== Init MatchHeight ---------------
$(".mh").matchHeight();

//==== Count Children -----------------
if ($(".tray--stats__wrapper > .stat").length > 3) {
    $(this).addClass("has-4");
}

//==== Events Show --------------------
$(".show-all-events").on("click", function () {
    $(this)
        .closest(".event-row, .story-row, .news-row")
        .find(".card.hide")
        .fadeIn();
});

//==== HTML5 Video -----------------------------
$(".video--container").each(function () {
    var video = $(this).find("video");
    var plainVideo = video.get(0);
    var playBtn = $(this).find(".play-pause");

    playBtn.click(function () {
        $(this).toggleClass("active");

        if (plainVideo.paused == true) {
            plainVideo.play();
            this.setAttribute("aria-label", "Play");
        } else {
            plainVideo.pause();
            this.setAttribute("aria-label", "Pause");
        }
    });
});

//==== iFrame Video -----------------------------
$(document).on("click", ".video-button", function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".video--container");
    videoPlay($wrapper);
});

function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".video--container__iFrame");
    var src = $iframe.data("src");
    $wrapper.addClass("active");
    $iframe.attr("src", src);
}

function videoStop($wrapper) {
    if (!$wrapper) {
        var $wrapper = $(".video--container");
        var $iframe = $(".video--container__iFrame");
    } else {
        var $iframe = $wrapper.find(".video--container__iFrame");
    }
    $wrapper.removeClass("active");
    $iframe.attr("src", "");
}

//==== Breadcrumbs More Trigger -------
$(".breadcrumbs .more").on("click", function () {
    $(".more-links").slideToggle();
});

$(document).on("click", function (e) {
    if ($(e.target).is(".breadcrumbs *, .more-links *") === false) {
        $(".more-links").slideUp(300);
    }
});

//==== Data Atribute Toggles ----------
$(".modal-trigger").on("click", function () {
    var myEm = $(this).attr("data-name");
    $(".modal[data-name = " + myEm + "]").addClass("active");
    $(".modal-fade").addClass("active");
});

$(".modal-fade, .close-modal").on("click", function () {
    $(".modal-fade").removeClass("active");
    $(".modal").removeClass("active");
});

//==== Side Nav Toggle ----------------
$(".side-nav .in-line-nav__trigger").on("click", function () {
    //$(this).toggleClass("active");
    $(this).closest(".side-nav").find(".side-nav__nav").slideToggle();
});

$(".side-nav__toggle").on("click", function () {
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle();
});

//==== In-line nav --------------------
$(".in-line-nav__trigger").on("click", function () {
    $(this).toggleClass("active");
    $(".in-line-nav__nav").slideToggle({
        start: function () {
            $(this).css("display", "flex");
        },
    });
});

$(document).on("click", function (e) {
    if ($(e.target).is(".in-line-nav *, .side-nav *") === false) {
        $(".in-line-nav__nav").slideUp(300);
        $(".in-line-nav__trigger").removeClass("active");
    }
});

//==== Close alert --------------------
$(".close-alert").on("click", function () {
    $(".inner-wrapper").removeAttr("style");
    $(this)
        .closest(".tray--alert")
        .slideUp(400, () => {
            $(".tray--alert").remove();
        });
});

if ($(".tray--alert").length) {
    var currTop = Number($(".inner-wrapper").css("top").replace("px", ""));
    var amountToAdd = $(".tray--alert").height();
    function addTop() {
        $(".inner-wrapper").css("top", currTop + amountToAdd + "px");
    }
}
window.onresize = addTop;
window.onload = addTop;

//==== Profile Swiper -----------------
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

//==== Slideshow Swiper ---------------
const swiperSlideshow = new Swiper(".swiper--slideshow", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    parallax: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//==== Video Swiper ---------------
var x = document.getElementsByClassName("swiper-video-outter");

for (var i = 0; i < x.length; i++) {
    var el = x[i];

    var swiperVideo = el.getElementsByClassName("swiper--video")[0];
    var nx = el.getElementsByClassName("swiper-button-next")[0];
    var pr = el.getElementsByClassName("swiper-button-prev")[0];

    new Swiper(swiperVideo, {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: nx,
            prevEl: pr,
        },

        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

//==== Program Finder Swiper ----------
const swiperProgramFinder = new Swiper(".swiper--program-finder", {
    loop: true,
    speed: 1000,
    slidesPerView: 1.1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".program-finder-button--next",
        prevEl: ".program-finder-button--prev",
    },

    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

//==== Show More Cards ----------------
$(".tray--comp-card .card-list .card").hide();
$(".tray--comp-card .card-list .card:nth-child(n+1):nth-child(-n+3)").show();

$(".button--load-more").click(function () {
    $(this)
        .closest(".card-wrapper")
        .find(".card:not(:visible):lt(3)")
        .slideDown();
    $(this).closest(".card-wrapper").find(".button--show-less").show();
});

$(".button--load-more").click(function () {});

$(".button--show-less").click(function () {
    $(this).closest(".card-wrapper").find(".card").not(":lt(3)").slideUp();
    $(this).hide();
});

//==== Accordions ---------------------
$(".accordion__button").on("click", function () {
    $(this).toggleClass("active");
    $(".accordion__button")
        .not(this)
        .removeClass("active")
        .next(".accordion__content")
        .slideUp();
    $(".accordion__button").not(this).attr("aria-expanded", "false");
    $(this).next(".accordion__content").slideToggle();

    if ($(this).attr("aria-expanded") === "true") {
        $(this).attr("aria-expanded", "false");
    } else {
        $(this).attr("aria-expanded", "true");
    }
});

$(".button-row .tab-toggle:not(:first)").addClass("inactive");
//$(".accordion__content").hide();
$(".accordion__content:first").show();

$(".button-row .tab-toggle").click(function () {
    var t = $(this).attr("id");
    if ($(this).hasClass("inactive")) {
        $(".button-row .tab-toggle")
            .addClass("inactive")
            .attr("aria-expanded", "false");
        $(this).removeClass("inactive");

        $(".accordion__content").hide();
        $("#" + t + "c").fadeIn("slow");
    }

    if ($(this).attr("aria-expanded") === "true") {
        $(this).attr("aria-expanded", "false");
    } else {
        $(this).attr("aria-expanded", "true");
    }
});

//==== DT tools toggle ----------------
$(".icons--tools-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".tools-dropdown").slideToggle();
    $("#main-site-search--desktop, .inner-wrapper").slideUp(250);
    $(
        ".desktop-search-toggle.active, .desktop-main-nav--wrapper li.active"
    ).removeClass("active");
});

//==== DT search toggle ---------------
$(".desktop-search-toggle").on("click", function () {
    $(".inner-wrapper, .tools-dropdown").slideUp(250);
    $(
        ".desktop-main-nav--wrapper li.active, .icons--tools-toggle.active"
    ).removeClass("active");
    $(this).toggleClass("active");
    $("#main-site-search--desktop")
        .slideToggle({
            start: function () {
                $(this).css("display", "flex");
            },
        })
        .find("input")
        .trigger("focus");
});

//==== Break points -------------------
var win = $(window);
resizeHandler();
win.resize(resizeHandler);

function resizeHandler() {
    if (win.width() <= 992) {
        $(document).on("click", function (e) {
            if (
                $(e.target).is(
                    ".desktop-main-nav *, #mobile-site-search *, .mobile-search-toggle, .mobile-tools-wrapper *, .mobile-tools-toggle, .top-bar *"
                ) === false
            ) {
                $(
                    ".inner-wrapper, #mobile-site-search, .mobile-tools-wrapper"
                ).slideUp(300);
                $(
                    "li.active, .mobile-search-toggle.active, .mobile-tools-toggle.active, .main-nav-toggle.active"
                ).removeClass("active");
            }
        });
    } else {
        $(".accordion__content:first").show();
        $(".side-nav__nav").show();

        $(".desktop-main-nav").show();
        $(document).on("click", function (e) {
            if (
                $(e.target).is(
                    ".desktop-main-nav *, .top-bar *, .tools-dropdown *"
                ) === false
            ) {
                $(
                    ".inner-wrapper, #main-site-search--desktop, .tools-dropdown"
                ).slideUp(300);
                $("li.active, .icons--tools-toggle.active").removeClass(
                    "active"
                );
            }
        });
    }
}

//==== Main nav toggle ----------------
$(".main-nav-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".desktop-main-nav").slideToggle();
});

//==== Mobile Tools toggle ------------
$(".mobile-tools-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile-tools-wrapper").slideToggle();
});

//==== Mobile Search toggle ------------
$(".mobile-search-toggle").on("click", function () {
    $(this).toggleClass("active");
    $("#mobile-site-search").slideToggle().find("input").trigger("focus");
});

//==== Show hide main nav dropdowns ----
$(".sub-toggle").on("click", function (e) {
    e.preventDefault();
    $("#main-site-search--desktop, .tools-dropdown").slideUp(250);
    $(".icons--tools-toggle.active, .desktop-search-toggle.active").removeClass(
        "active"
    );
    $(this).parent("li").toggleClass("active");

    $(".sub-toggle")
        .nextAll(".featured-block, .inner-wrapper .inner")
        .slideUp(250);

    $(".sub-toggle")
        .not(this)
        .nextAll(".inner-wrapper, .featured-block")
        .slideUp(350);

    $(".sub-toggle").not(this).parent().removeClass("active");

    $(this)
        .nextAll(".inner-wrapper, .featured-block")
        .slideToggle({
            start: function () {
                $(this).css({
                    display: "flex",
                });
            },
        });
});

//==== Select styling  ----------------
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
        '<span class="custom-select-trigger">' +
        $(this).attr("placeholder") +
        "</span>";
    template += '<div class="custom-options">';
    $(this)
        .find("option")
        .each(function () {
            template +=
                '<span class="custom-option ' +
                $(this).attr("class") +
                '" data-value="' +
                $(this).attr("value") +
                '">' +
                $(this).html() +
                "</span>";
        });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(
    function () {
        $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    }
);
$(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
    $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this)
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
});

//==== Input label animation ----------
$("input").on("focus", function () {
    $(this).prev("span").addClass("move-up");
});

$("input").on("focusout", function () {
    if (!$(this).val()) $(this).prev("span").removeClass("move-up");
});
