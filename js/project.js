$(document).ready(function(){
  $('.projects').on('click', displayProjects);
});


function displayProjects() {
  var projects = $('#projects');

  projects.fadeIn('slow');
}
