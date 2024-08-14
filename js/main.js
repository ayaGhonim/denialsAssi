let aboutOffset = $("#about").offset().top
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop()
    if (windowScroll > aboutOffset - 90) {
        $('#navbar-example').css('backgroundColor', 'rgba(0,0,0,.8)')
        $('#daniels').css('color', 'white')
        $('#btnUp').fadeIn(100)
    }
    else {
        $('#navbar-example').css('backgroundColor', 'transparent')
        $('#daniels').css('color', 'black')
        $('#btnUp').fadeOut(100)
    }
})
// end navbar scroll
$("a[href^='#']").click(function (event) {
    let aHref = event.target.getAttribute('href')
    let aOffset = $(aHref).offset().top
    $("body").animate({ scrollTop: aOffset }, 2000)
    console.log(aHref)
})
// scroll to any section that start his href with #

// $("#btnUp").click(function(){
//     $("body").animate({scrollTop:0},4000)
// })

$(document).ready(function () {
    $('body').css('overflow', 'hidden').fadeIn(100, function () {
        $('.lds-facebook ').fadeOut(2000)
        $('#looding').fadeOut(2000, function () {
            $('body').css('overflow', 'auto')
            $('#looding').remove()
        })
    })
  
})

// ///////////////////////////////
// wow

new WOW().init();





