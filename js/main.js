$(document).ready(function(){
  $('.bio.fa-info-circle').on('click', infoIconClicked);
  $('.projects').on('click', displayProjects);
  $('.email').on('click', sendEmailClick);
})

function infoIconClicked() {
  var shortBio = $('#bioContent');
      infoIcon = $('.bio.fa-info-circle');
      closeIcon = $('.bio.fa-times');
      bioSlideIn = 'animated slideInRight';
      bioSlideOut = 'animated slideOutRight';
      animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  shortBio.removeClass('hide');
  shortBio.addClass(bioSlideIn).on(animationEnd, function() {
    $(this).removeClass(bioSlideIn).removeClass('hide');
    infoIcon.addClass('hide');
    closeIcon.removeClass('hide');
  });

  closeIcon.on('click', function(){
    shortBio.addClass(bioSlideOut).on(animationEnd, function(){
      $(this).removeClass(bioSlideOut).addClass('hide');
      closeIcon.addClass('hide');
      infoIcon.removeClass('hide');
    });
  });
}

function sendEmailClick() {
  var sendEmail = $('.email');
      emailShake = 'animated shake';
      animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      sendEmail.addClass(emailShake).on(animationEnd, function(){
        $(this).removeClass(emailShake);
      });
}
