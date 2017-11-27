$(".board1").hover(
  function() {
    $(this).slideUp()
  }, function() {
    $(this).slideDown();
  }
);

$(".board2").hover(
  function() {
    $(this).slideUp()
  }, function() {
    $(this).slideDown();
  }
);

$(".board3").hover(
  function() {
    $(this).slideUp()
  }, function() {
    $(this).slideDown();
  }
);

$("button a").hover(
  function() {
    $(this).addClass("buy-hover");
  }, function() {
    $(this).removeClass("buy-hover");
  }
);