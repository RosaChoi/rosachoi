$(document).ready(function(){
  $('.projects').on('click', displayProjectMenu);

});


function displayProjectMenu() {
  var projects = $('#projects');
  var firstProject = $('#project1');
  var firstProjectCir = $('.proj-cir').find("[data='project1']");

  projects.fadeIn(2000);
  firstProjectCir.attr('class', 'project-cir');

  firstProject.removeClass('hide').fadeIn(2000);

  displayProjects();
}

function displayProjects() {

  $('.menu-dot').on('mouseenter', function(){
    var projectId = $(this).attr("data");
    var projectIcon = $(this).parents('#dots').siblings('#projectIcons').find("[data=" + projectId + "]");
    var projectContent = $(this).parents().parents().parents().siblings("#" + projectId);
    $('.project').addClass('hide');
    $('.project-cir').attr('class','hide');
    projectIcon.attr('class', 'project-cir');
    projectContent.removeClass('hide').fadeIn(2000);

  });

}
