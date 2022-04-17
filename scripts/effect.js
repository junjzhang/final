const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!mediaQuery || mediaQuery.matches) {
  pass;
} else {
  $(document).ready(function () {
    var myCursor = $(".mouse-cursor");
    if (myCursor.length) {
      if ($("body")) {
        const inner = document.querySelector(".cursor-inner"),
          outer = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (outer.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (inner.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            inner.classList.add("cursor-hover"),
              outer.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (inner.classList.remove("cursor-hover"),
              outer.classList.remove("cursor-hover"));
          }),
          (inner.style.visibility = "visible"),
          (outer.style.visibility = "visible");
      }
    }
  });
}
