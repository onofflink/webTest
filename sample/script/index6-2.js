var n = 0;
var depth = 2;
(function ani() {
  $(".banner  li").eq(n).css("z-index", depth++).fadeOut(0);
  $(".banner  li").eq(n).fadeIn(5000, function() {
    if(n == 4) n = 0;
    else n++;
    ani();
  });
})();