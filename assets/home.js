$("button a").hover(
  function() {
    $(this).addClass("view-hover");
  }, function() {
    $(this).removeClass("view-hover");
  }
);