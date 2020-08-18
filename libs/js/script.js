$(document).ready(function () {
  //! Burger menu
  $(".navigation__burger").on("click", function () {
    $(".navigation__burger, .navbar").toggleClass("active");
    $("body").toggleClass("lock");
  });

  //! Slider
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    touchTreshhold: 10,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".review-poeples").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    touchTreshhold: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".review-section",
  });

  $(".review-section").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    speed: 1000,
    easing: "ease",
    asNavFor: ".review-poeples",
  });

  //! Navbar scroll
  $(".navbar-a").on("click", function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
    $(".navigation__burger, .navbar").removeClass("active");
    $("body").removeClass("lock");
  });

  //! Go to back
  let $btnTop = $(".btn-top");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });

  $btnTop.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
