
/* Background Images
-------------------------------------------------------------------*/
//var pageTopImage = jQuery('body').data('background-image');
//var pageTopImages;
/*var  aboutImage = jQuery('#about').data('background-image');
var  subscribeImage = jQuery('#subscribe').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');*/

//if (pageTopImage) {
//    pageTopImages = pageTopImage.split(";");
//    jQuery('body').css({ 'background-image':'url(' + pageTopImages[0] + ')','background-repeat':'no-repeat' });
//};
/*if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (subscribeImage) {  jQuery('#subscribe').css({ 'background-image':'url(' + subscribeImage + ')' }); };
if (contactImage) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };*/

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/

    var startDate = new Date(2017,5,17,0,0,0);
    // var startDate = new Date(2017,5,17,0,0,0);

	/* Time Countdown 
	-------------------------------------------------------------------*/
	$('#time_countdown').countDown({
        
        targetDate: {
            'year': startDate.getFullYear(),
            'month': startDate.getMonth(),
            'day': startDate.getDate(),
            'hour': 0,
            'min': 0,
            'sec': 0
        },
        omitWeeks: true

         // targetOffset: {
         //    'day':      0,
         //    'month':    0,
         //    'year':     1,
         //    'hour':     0,
         //    'min':      0,
         //    'sec':      3
		// },
		// omitWeeks: true

	    });


    /* Time Countdown End
	-------------------------------------------------------------------*/



    /* background
    -------------------------------------------------------------------*/

    // var imgURL = '';
    // var repeat = '';
    // $.each(pageTopImages, function (i) {
    //     console.log(imgURL);
    //     imgURL += 'url("' + pageTopImages[i] + '") ';
    //     repeat += 'no-repeat ';
    // });

    //console.log(imgURL);

    // jQuery('body').css({'background-image':'url("xxxxx") url("xxxxxxccc")', 'background-repeat':repeat});

    // setInterval(function() {
    //     // pageTopImage = pageTopImage.replace(/[1-2]/, startDate.getSeconds() % 2 + 1);
    //
    //     jQuery('body').animate({
    //         'backgroundImage':'url(' + pageTopImages[startDate.getSeconds() % pageTopImages.length] + ')',
    //         'backgroundRepeat':'no-repeat'
    //     }, 2000);
    // }, 5000);

    /* background
   -------------------------------------------------------------------*/
});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
   
