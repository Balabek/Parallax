/**
 * Created by KRM on 1/23/15.
 */


$(document).ready(function(){

    $('#parall-header-carousel').on('slide.bs.carousel', function (event) {
        var slideIndex = $(event.relatedTarget).index();
        console.log($(event.relatedTarget).index());
        $('.h_banner').each(function(i,val){
            if (i == slideIndex) {
                $(val).removeClass('hide_h_banner');
            }
            else {
                $(val).addClass('hide_h_banner');
            }
        })

    });

    var solutionsDropdown = $('#solutiondropdown a');
    var serviceDropdown = $('#servicedropdown a');
    var partnerDropdown = $('#partnerdropdown a');
    var width = $(window).width();

    if((width) >= 768 ) {
        $(solutionsDropdown).on('mouseover', function () {
            $(solutionsDropdown).css('background-color', '#404040');
        });
        $(solutionsDropdown).on('mouseleave', function () {
            $(solutionsDropdown).css('background-color', 'transparent');
        });

        $(serviceDropdown).on('mouseover', function () {
            $(serviceDropdown).css('background-color', '#404040');
        });
        $(serviceDropdown).on('mouseleave', function () {
            $(serviceDropdown).css('background-color', 'transparent');
        });

        $(partnerDropdown).on('mouseover', function () {
            $(partnerDropdown).css('background-color', '#404040');
        });
        $(partnerDropdown).on('mouseleave', function () {
            $(partnerDropdown).css('background-color', 'transparent');
        });

        $('.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        });

    }


});

