function expand_description(e) {
  let focused = $(this).data("focused");
  if (e.type == "click") {
    if (focused) {
      $(this).data("focused", false);
      return;
    }
  } else if (e.type == "focus") {
    $(this).data("focused", true);
  }
  $(this.parentNode)
    .prevAll()
    .find(".gallery-item, img, p")
    .removeClass(
      "gallery-item-active gallery-item-img-active gallery-item-p-active"
    );
  $(this.parentNode.parentNode)
    .prevAll()
    .find(".gallery-item, img, p")
    .removeClass(
      "gallery-item-active gallery-item-img-active gallery-item-p-active"
    );
  $(this.parentNode)
    .nextAll()
    .find(".gallery-item, img, p")
    .removeClass(
      "gallery-item-active gallery-item-img-active gallery-item-p-active"
    );
  $(this).toggleClass("gallery-item-active");
  $(this).find("img").toggleClass("gallery-item-img-active");
  $(this.parentNode).find("p").toggleClass("gallery-item-p-active");
}

$(".gallery-item").on("focus click", expand_description);
$(".gallery-item").on("blur", function () {
  $(this).data("focused", false);
});

$(".gallery-item img").on("touchstart", function () {
  $(this).css("animation", "border-zoom infinite 2s");
});

$(".gallery-item img").on("touchend", function () {
  $(this).css("animation", "none");
});

$(".gallery-item img").on("touchcancel", function () {
  $(this).css("animation", "none");
});
