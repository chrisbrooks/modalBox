/*
 * Jquery modalBox Plugin
 * 
 * Author: Chris Brooks
 * URL: http://www.chris-brooks.co.uk
 * 
 */
(function($) {
    "use strict";
    // Defining our jQuery plugin
    $.fn.modalBox = function(options) {

        var clickable = $(this);

        // Default parameters
        var settings = $.extend({
            height: "80",
            width: "80",
            padding: "10",
            title: "JQuery Modal Box Demo",
            description: "Example of how to create a modal box.",
            staticPopup: false
        }, options);

        //Click event on element
        return clickable.click(function() {
            if(settings.staticPopup === false){
                openPopup();
                add_styles();
                closeModal();
                $('.modalBoxDynamic').fadeIn(200);
            }else{
                if(!$('.modalBoxStatic').hasClass('opened')){
                     popupStaticBase();
                }
                openPopupStatic();
                add_styles();
                closeModal();
            }  
        });

        //Open popup dynamic
        function openPopup() {
            var popupOption = $('<div class="modalBoxDynamic"><div class="modalBox"><a href="#" class="close">X</a><div class="modalBoxInner"><h2>' + settings.title + '</h2><p>' + settings.description + '</p></div></div></div>');
            $(popupOption).appendTo('body');   
        }

        //Open popup static base
        function popupStaticBase() {
            var popupOption = $('<div class="modalBoxStatic"><div class="modalBox"><a href="#" class="close">X</a><div class="modalBoxInner"></div></div></div>');
             $(popupOption).appendTo('body'); 
        }

        //Open popup static
        function openPopupStatic() {
            var targetSelector = '#' + clickable.attr('class');
            $(targetSelector).appendTo('.modalBoxInner'); 
            $(targetSelector).removeClass('hidden').closest('.modalBoxStatic').addClass('opened').fadeIn(200);
        }

        //close modal popup
        function closeModal() {
            $('.close, .modalBoxStatic, .modalBoxDynamic').click(function() {
                $('.modalBoxDynamic, .modalBoxStatic').fadeOut(200);
                if(settings.staticPopup === false){
                    setTimeout(function() {
                        $('.modalBoxDynamic').remove();
                    }, 200);
                }
            });
        }

        //Adding css styles
        function add_styles() {
            $('.modalBox').css({
                'height': settings.height + '%',
                'width': settings.width + '%',  
                'padding': settings.padding,  
                'margin-left': -settings.width / 2 + '%',
                'top': 50 - settings.height /2 + '%'
            });

            $('.modalBoxInner').css({
                'height': settings.height + "%" - settings.padding*2 
            });
                
        }
        return this;
    };
})(jQuery);