$("document").ready(function () {
  // load the navagation bar and highlight the current page
  $("#nav").load("components/nav.html", function () {
    $("nav a").each(function () {
      if (this.href == document.URL) {
        $(this).addClass("selected");
      }
    });
  });
  // load the footer
  $("footer").load("components/footer.html");
});
