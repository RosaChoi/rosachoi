window.onload = function(e) {
  e.preventDefault();
  $('.bio').on('click', infoClicked);


}



// BIO ICON CLICK EVENT
function infoClicked() {
  var hidden = $('#bioContent');
  $('#bioContent').slideToggle(2000);
}
