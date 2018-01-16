$('.menuBtn').click(function () {
  $("#sideNav").toggleClass('open');
  $("#filter").toggleClass('open');
});

$('#filter').click(function (e) {
  $("#sideNav").toggleClass('open');
  $("#filter").toggleClass('open');
});
