function sideNav() {
  $("#sideNav").toggleClass('open');
  $("#filter").toggleClass('open');
}

$('.menuBtn').click(function () {
  sideNav();
});

$('#filter').click(function (e) {
  sideNav();
});
$('.list').click(function () {
  $('.list').removeClass('active');
  this.className = 'list active';
  $('.tab').css("display","none");
  var tab = this.getAttribute('data-tab');
  $(tab).css("display","block");
  sideNav();
});
