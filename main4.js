@import url('index1.html');
@import url('./index2.html');

$(".vector").click(function () {
  $(".account").addClass("modal-open");
});

$(".close").click(function () {
  $(".account").removeClass("modal-open");
});
