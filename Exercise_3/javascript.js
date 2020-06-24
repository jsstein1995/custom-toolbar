// To keep nav on screen after you shrink window
$(window).resize(function() {
    if($(window).width() > 768) {
        $(".nav-links").removeAttr('style');
    }
})

//Toggling dropdown with and without burger menu
$(".dropdown").on('click', function() {
    event.preventDefault();
    $(".nav-links ul").slideToggle();
    $(".nav-links ul li").css("dipslay", "none");
})
$(".burger").on('click', function() {
    event.preventDefault();
    $(".nav-links").slideToggle();
    $(".nav-links ul").css("dipslay", "none");
})

//Nav theme change on scroll
$(window).scroll(function() {
    if($(document).scrollTop() < 100) {
        $("nav ul").removeClass("nav-links-scroll");
        $("nav ul").addClass("nav-links");
        $("nav").removeClass("nav-scroll");
        $(".arrow-down").removeClass("scroll");
        $(".logo-shrunk").removeClass("scroll");
        $(".burger div").removeClass("scroll");
    }
    else {
        $("nav ul").removeClass("nav-links");
        $("nav ul").addClass("nav-links-scroll");
        $("nav").addClass("nav-scroll");
        $(".arrow-down").addClass("scroll");
        $(".logo-shrunk").addClass("scroll");
        $(".burger div").addClass("scroll");
    }
})

//Toggling dropdown after scroll
$(".dropdown").on('click', function() {
    event.preventDefault();
    $(".nav-links-scroll ul").slideToggle();
    $(".nav-links-scroll ul li").css("dipslay", "none");
})
$(".burger").on('click', function() {
    event.preventDefault();
    $(".nav-links-scroll").slideToggle();
    $(".nav-links-scroll ul").css("dipslay", "none");
})
// Prevent starting at the top of the page
$("a").on('click', function() {
    event.preventDefault();
})

//burger X animation
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
});

