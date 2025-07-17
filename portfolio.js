$(".flash-btn").click(function(event) {
  event.preventDefault();
  var $this = $(this);
  var url = $(this).attr("href");
  $this.css({
    "box-shadow": "0 0 0 12px #e73c7eb3, 0 0 0 20px #e73c7e80, 0 0 0 30px #e73c7e33",
    "transition": "box-shadow 0s"
  });
  setTimeout(function () {
    $this.css({
      "box-shadow": "",
      "transition": "box-shadow 0.6s"
    });
    setTimeout(function () {
      window.location.href = url;
    }, 600);
  }, 250);
});














