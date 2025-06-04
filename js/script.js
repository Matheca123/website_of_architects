
let ourProjectsItem = $('.our-projects__item');
let ourProjectsBtn = $('.our-projects__btn');
let projectHomeHidden = $('[data-hidden="yes"]');


ourProjectsBtn.children().on('click', showMoreProjects);

function showMoreProjects (e) {
   e.preventDefault();
   projectHomeHidden.each(function (i) {
      projectHomeHidden.eq(i).slideToggle('slow', function () {
         if(projectHomeHidden.css('display') == "block"){
            ourProjectsBtn.find(':contains("Все проекты")').text('Скрыть');
         }else{
            ourProjectsBtn.find(':contains("Скрыть")').text('Все проекты');
         }
      });
   });
}

$(document).ready(function () {

   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
   });

   $('.navigate__item').click(function(e){
      e.preventDefault();
      setTimeout(function(){
         $('.header__burger, .navigate').removeClass('active');
      }, 500, "linear");
   });

});

$(document).ready(function() {

   $('.header__burger').click(function(e){
      $('.header__burger, .navigate').toggleClass('active');
      $('body').toggleClass('lock');
   });
   
});

let slickActive = $('.slick-active');
let img = $('.project-home__img');
let month = $('.date__month');
let day = $('.date__day');
let dataDate = $('[data-date]');
let arrow = $('.slick-arrow');


