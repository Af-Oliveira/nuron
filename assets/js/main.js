var file;
var iduser = $("#iduser") ? $("#iduser").html() : 0;
(function ($) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      imJs.featherAtcivation();
      imJs.backToTopInit();
      imJs.stickyHeader();
      imJs.smothScroll();
      imJs.stickyAdjust();
      imJs.slickActivation();
      imJs.contactForm();
      imJs.selectJs();
      imJs.popupMobileMenu();
      imJs.masonryActivation();
      imJs.cursorAnimate();
      imJs.rncounterUp();
      imJs.salActive();
      imJs.searchClick();
      imJs.filterClickButton();
      imJs.unloadImage2();
      imJs.unloadImage();
      imJs.unloadImage3();
      imJs.darkLight();
    },

    featherAtcivation: function () {
      feather.replace();
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      });

      //Click event to scroll to top
      $(scrollTop).on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    smothScroll: function () {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top - 50,
          },
          300
        );
      });
    },

    stickyAdjust: function (e) {
      // Sticky Top Adjust..,
      $(".rbt-sticky-top-adjust").css({
        top: 100,
      });

      $(".rbt-sticky-top-adjust-two").css({
        top: 200,
      });
      $(".rbt-sticky-top-adjust-three").css({
        top: 25,
      });
      $(".rbt-sticky-top-adjust-four").css({
        top: 90,
      });
      $(".rbt-sticky-top-adjust-five").css({
        top: 100,
      });
    },

    slickActivation: function () {
      $(".slick-activation-01").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-02").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-03").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-04").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
      });

      $(".slick-activation-05").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-06").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".slick-activation-07").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-08").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-09").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
      });

      $(".slider-activation-banner-3").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],
      });
      $(".slider-activation-banner-5").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1599,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],
      });
      $(".slider-activation-banner-4").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
      });

      $(".top-seller-slick-activation").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
    },

    contactForm: function () {
      $(".rwt-dynamic-form").on("submit", function (e) {
        e.preventDefault();
        var _self = $(this);
        var __selector = _self.closest("input,textarea");
        _self.closest("div").find("input,textarea").removeAttr("style");
        _self.find(".error-msg").remove();
        _self
          .closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var data = $(this).serialize();
        $.ajax({
          url: "mail.php",
          type: "post",
          dataType: "json",
          data: data,
          success: function (data) {
            _self
              .closest("div")
              .find('button[type="submit"]')
              .removeAttr("disabled");
            if (data.code == false) {
              _self.closest("div").find('[name="' + data.field + '"]');
              _self
                .find(".rn-btn")
                .after('<div class="error-msg"><p>*' + data.err + "</p></div>");
            } else {
              $(".error-msg").hide();
              $(".form-group").removeClass("focused");
              _self
                .find(".rn-btn")
                .after(
                  '<div class="success-msg"><p>' + data.success + "</p></div>"
                );
              _self.closest("div").find("input,textarea").val("");

              setTimeout(function () {
                $(".success-msg").fadeOut("slow");
              }, 5000);
            }
          },
        });
      });
    },

    selectJs: function (e) {
      $(document).ready(function () {
        $("select").niceSelect();
      });
    },

    popupMobileMenu: function (e) {
      $(".hamberger-button").on("click", function (e) {
        $(".popup-mobile-menu").addClass("active");
      });

      $(".close-menu").on("click", function (e) {
        $(".popup-mobile-menu").removeClass("active");
        $(
          ".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
        )
          .siblings(".submenu, .rn-megamenu")
          .removeClass("active")
          .slideUp("400");
        $(
          ".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
        ).removeClass("open");
      });

      $(
        ".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
      ).on("click", function (e) {
        e.preventDefault();
        $(this)
          .siblings(".submenu, .rn-megamenu")
          .toggleClass("active")
          .slideToggle("400");
        $(this).toggleClass("open");
      });

      $(".popup-mobile-menu").on("click", function (e) {
        e.target === this &&
          $(".popup-mobile-menu").removeClass("active") &&
          $(
            ".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
          )
            .siblings(".submenu, .rn-megamenu")
            .removeClass("active")
            .slideUp("400") &&
          $(
            ".popup-mobile-menu .mainmenu .has-droupdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a"
          ).removeClass("open");
      });

      $(".one-page-vavigation-popup .mainmenu li > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(".popup-mobile-menu").removeClass("active");
          $(".popup-mobile-menu .mainmenu li > a")
            .siblings(".submenu")
            .removeClass("active");
        }
      );
    },

    masonryActivation: function name(params) {
      $(".masonary-wrapper-activation").imagesLoaded(function () {
        // filter items on button click
        $(".isotop-filter").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          $(this).siblings(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
          $grid.isotope({
            filter: filterValue,
          });
        });

        // init Isotope
        var $grid = $(".mesonry-list").isotope({
          percentPosition: true,
          transitionDuration: "0.7s",
          layoutMode: "masonry",
          masonry: {
            columnWidth: ".resizer",
          },
        });
      });
    },

    cursorAnimate: function () {
      var myCursor = $(".mouse-cursor");
      if (myCursor.length) {
        if ($("body")) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          let n,
            i = 0,
            o = !1;
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on("mouseenter", "a, .cursor-pointer", function () {
              e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function () {
              ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
        }
      }
    },

    rncounterUp: function () {
      var odo = $(".odometer");
      odo.each(function () {
        $(".odometer").appear(function (e) {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    },

    salActive: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },

    searchClick: function (e) {
      var screenWidth = imJs._window.width();
      if (screenWidth < 992) {
        $(".search-mobile-icon").on("click", function (e) {
          e.preventDefault();
          $(this)
            .toggleClass("open")
            .siblings(".large-mobile-blog-search")
            .toggleClass("active");
        });
      }
    },

    filterClickButton: function () {
      $(".discover-filter-activation").on("click", function () {
        $(this).toggleClass("open");
        $(".default-exp-expand").slideToggle("400");
      });

      $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [100, 300],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
          $("#slider-range").slider("values", 0) +
          " - $" +
          $("#slider-range").slider("values", 1)
      );
    },

    unloadImage: function name() {
      $("#rbtinput1").click(function (e) {
        $("#fatima").click();
      });

      function rbtPreview() {
        [file] = fatima.files;

        // Send the file to upload.php using an AJAX request
        if (file) {
          if (ValidateImg(file)) {
            rbtinput1.src = URL.createObjectURL(file);
          } else {
            console.log("Error");
            swal({
              title: "Oops...",
              text: "Bad File!",
              icon: "error",
              button: "Ok",
            });
          }
        }
      }

      $("#fatima").change(function () {
        rbtPreview(this);
      });
    },

    unloadImage2: function name() {
      $("#rbtinput2").click(function (e) {
        $("#nipa").click();
      });

      function rbtPreview() {
        [file] = nipa.files;

        if (file) {
          if (ValidateImg(file)) {
            rbtinput2.src = URL.createObjectURL(file);
          } else {
            swal({
              title: "Oops...",
              text: "Bad File!",
              icon: "error",
              button: "Ok",
            });
          }
        }
      }
      $("#nipa").change(function () {
        rbtPreview(this);
      });
    },

    unloadImage3: function name() {
      $("#createfileImage").click(function (e) {
        $("#createinputfile").click();
      });
      function rbtPreview() {
        [file] = createinputfile.files;

        if (file) {
          if (ValidateImg(file)) {
            createfileImage.src = URL.createObjectURL(file);
          } else {
            swal({
              title: "Oops...",
              text: "Bad File!",
              icon: "error",
              button: "Ok",
            });
          }
        }
      }
      $("#createinputfile").change(function () {
        rbtPreview(this);
      });
    },

    darkLight: function () {
      var styleMode = document.querySelector(
        'meta[name="theme-style-mode"]'
      ).content;
      var cookieKey =
        styleMode == 1
          ? "client_dark_mode_style_cookie"
          : "client_light_mode_style_cookie";
      if (Cookies.get(cookieKey) == "dark") {
        $("body").removeClass("active-light-mode");
        $("body").addClass("active-dark-mode");
      } else if (Cookies.get(cookieKey) == "light") {
        $("body").removeClass("active-dark-mode");
        $("body").addClass("active-light-mode");
      } else {
        if (styleMode == 1) {
          $("body").addClass("active-dark-mode");
        } else {
          $("body").addClass("active-light-mode");
        }
      }
    },
  };

  imJs.m();
})(jQuery, window);

function ValidateImg(file) {
  if (file.type.includes("image")) {
    return true;
  } else {
    return false;
  }
}

function uploadFile(file, pasta) {
  var formData = new FormData();

  formData.append("file", file, file.name);

  if (ValidateImg(file)) {
    $.ajax({
      url: `inc/uploadImg.php?pasta=${pasta}`,
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        alert(data);
      },
    });
    return file;
  } else {
    return null;
  }
}

$("#submitEPI").on("submit", function (e) {
  e.preventDefault();
  [banner] = nipa.files ? nipa.files : null;
  [avatar] = fatima.files ? fatima.files : null;

  if (avatar) {
    avatar = uploadFile(avatar, `profiles/${iduser}/avatars`);
  }

  if (banner) {
    banner = uploadFile(banner, `profiles/${iduser}/banners`);
  }

  uploadEPI(avatar ? avatar.name : null, banner ? banner.name : null);
});

$("#submitIten").on("submit", function (e) {
  e.preventDefault();
  [iten] = createfileImage.files ? createfileImage.files : null;

  if (iten) {
    iten = uploadFile(avatar, `profiles/${iduser}/itens`);
  }

  uploadIten(iten ? iten.name : null);
});

function uploadIten(iten) {
  var formData = new FormData();

  if (iten) {
    formData.append("iten", iten);
  }

  $.ajax({
    url: `inc/handlers/TratarEPI.php`,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function () {
      swal({
        title: "Saved",
        text: "Profile Updated!",
        icon: "success",
        button: "Ok",
      });
    },
  });
}

function uploadEPI(avatar, banner) {
  var formData = new FormData();

  if (avatar) {
    formData.append("avatar", avatar);
  }
  if (banner) {
    formData.append("banner", banner);
  }

  $.ajax({
    url: `inc/handlers/TratarEPI.php`,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function () {
      swal({
        title: "Saved",
        text: "Profile Updated!",
        icon: "success",
        button: "Ok",
      });
    },
  });
}

$("#submitPI").on("submit", function (e) {
  e.preventDefault();
  data = $("#submitPI").serialize();
  $.ajax({
    url: `inc/handlers/TratarPI.php`,
    type: "POST",
    data: data,
    success: function () {
      swal({
        title: "Saved",
        text: "Profile Updated!",
        icon: "success",
        button: "Ok",
      });
    },
  });
});

function getMongoData(collection, filter) {
  var dataFromMongo;
  $.ajax({
    url: `inc/handlers/getMongoData.php?name=${collection}&filter=${filter}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      dataFromMongo = data;
    },
  });
  return dataFromMongo;
}

async function getMongoData(collection, filter = "null") {
  console.log(collection, filter);
  const data = await axios.get(
    "inc/handlers/getMongoData.php?name=" +
      collection +
      "&filter=" +
      encodeURIComponent(filter)
  );
  console.log(data.data);
  return data.data;
}
