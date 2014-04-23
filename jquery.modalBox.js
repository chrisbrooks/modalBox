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

        // Default parameters
        var settings = $.extend({
            height: "80",
            width: "80",
            padding: "10",
            title: "JQuery Modal Box Demo",
            description: "Example of how to create a modal box.",
            staticPopup: false
        }, options);

        //Open popup dynamic
        function openPopup() {
            var popupOption = $('<div class="modalBoxDynamic"><div class="modalBox"><a href="#" class="close">X</a><div class="modalBoxInner"><h2>' + settings.title + '</h2><p>' + settings.description + '</p></div></div></div>');
            $(popupOption).appendTo('body');   
            $('body').addClass('noScroll');
        }

        //Open popup static base
        function popupStaticBase() {
            var popupOption = $('<div class="modalBoxStatic"><div class="modalBox"><a href="#" class="close">X</a><div class="modalBoxInner"></div></div></div>');
             $(popupOption).appendTo('body'); 
             $('body').addClass('noScroll');
        }

        //Open popup static
        function openPopupStatic(clickable) {
            var targetSelector = '#' + clickable.attr('class');
            $(targetSelector).appendTo('.modalBoxInner'); 
            $(targetSelector).removeClass('hidden').closest('.modalBoxStatic').addClass('opened').fadeIn(200);
            $('body').addClass('noScroll');        
        }

        //close modal popup
        function closeModal() {
            $('.close, .modalBoxStatic, .modalBoxDynamic').click(function() {
                $('.modalBoxDynamic, .modalBoxStatic').fadeOut(200);
                $('body').removeClass('noScroll');
                if(settings.staticPopup === false){
                    setTimeout(function() {
                        $('.modalBoxDynamic').remove();
                    }, 200);
                }
                return false;
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
                'height': '100%'
            });

            console.log(settings.height - settings.padding*2 + "%")
                
        }
        //Click event on element
        return this.click(function() {
            var clickable= $(this);
            if(settings.staticPopup === false){
                openPopup();
                add_styles();
                closeModal();
                $('.modalBoxDynamic').fadeIn(200);
            }else{
                if(!$('.modalBoxStatic').hasClass('opened')){
                     popupStaticBase();
                }
                openPopupStatic(clickable);
                add_styles();
                closeModal();
            }
            return false;  
        });

    };
})(jQuery);