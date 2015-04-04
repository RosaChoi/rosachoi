$(document).ready(function(){
  $('.projects').on('click', displayProjectMenu);
  $('ul.navbar').on('click', 'span.fa-times', closeProject);
});


function displayProjectMenu() {
  var projects = $('#projects');
  var firstProject = $('#project1');
  var projectCloseIcon = $('.projects .fa-times');
  var firstProjectCir = $('.proj-cir').find("[data='project1']");

  projects.fadeIn(2000);
  projectCloseIcon.removeClass('hide').fadeIn(3000);
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
    // projectContent.removeClass('hide').fadeIn(2000);
    projectContent.removeClass('hide', function(){
      fadeIn(3000)
    });

  });

}

function closeProject() {
    $('.project.container').fadeOut('2000', function(){
      $('#projects').fadeOut('slow');
      $('span.fa-times').addClass('hide');
    });
}
