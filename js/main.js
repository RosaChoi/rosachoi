window.onload = function(e) {
  e.preventDefault();
  $('.bio').on('click', infoClicked);


}



// BIO ICON CLICK EVENT
function infoClicked() {
  var hidden = $('#bioContent');
  hidden.toggle("slide");
}
