$(document).ready(function () {
  //Mobile Menu Toggle

  $("#open").click(function () {
    $(".mobile-open").fadeIn(500);
    $(".mobile-links").css("left", "0");
  });
  $("#close").click(function () {
    $(".mobile-links").css("left", "-100%");
    $(".mobile-open").fadeOut(500);
  });

  //Slides

  let slide = 1;
  let screenMode = $(window).width() > 500 ? "desktop" : "mobile";

  function switchSlides(type) {
    let img = $(".nav-box");
    let title = $("#title");
    let text = $("#text");
    let slides = {
      titles: [
        "Discover innovative ways to decorate",
        "We are available all across the globe",
        "Manufactured with the best materials",
      ],
      texts: [
        `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
        `With stores all over the world, its easy for you to find furniture for your home or place of business. 
        Locally, in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Dont hesitate to contact us today.`,
        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
      ],
      image: `${screenMode}-image-hero-${
        type == "next" ? slide + 1 : slide - 1
      }.jpg`,
    };
    if ((slide == 3 && type == "next") || (slide == 1 && type == "pre")) {
      return false;
    }
    if (type == "next") {
      slide = slide + 1;
      img.css("background-image", `url(img/${slides.image})`);
      title.text(slides.titles[slide - 1]);
      text.text(slides.texts[slide - 1]);
      return true;
    }
    slide = slide - 1;
    img.css("background-image", `url('img/${slides.image}')`);
    title.text(slides.titles[slide - 1]);
    text.text(slides.texts[slide - 1]);
  }
  $(".left").click(function () {
    switchSlides("pre");
  });
  $(".right").click(function () {
    switchSlides("next");
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 37) {
      switchSlides("pre");
    } else if (e.keyCode == 39) {
      switchSlides("next");
    }
  });
});
