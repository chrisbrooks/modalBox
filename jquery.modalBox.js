(function ($) {
    "use strict";
    $.fn.modalBox = function( options ) {
       
        // Default parameters
        var settings = $.extend({
            width: 600,
            height: 400, 
            padding: 20,
            percentages: false
        }, options );

        return this.each(function(){
            // Get specific DOM elements
            var openButton = $(this),
            targetSelector = '#' + openButton.attr('data-target'),
            closeButtons = '.modal-close, .overlay';

            // Show the relevant modal window on clicking the open button
            openButton.on('click touchstart',function(){

                var targetSelector = '#' + $(this).attr('data-target');
                $(targetSelector + ', .overlay').fadeIn('fast');

                //stop scrolling background on mobile
                $('.overlay').bind('touchmove', function(e){
                    e.preventDefault();
                });

                $('body,html').css('overflow','hidden');

                if(settings.percentages === true){
                    $(targetSelector).css({
                        'height': settings.height + '%',
                        'width': settings.width + '%',  
                        'padding': settings.padding,  
                        'margin-left': 0,
                        'top': 50 - settings.height /2 + '%',
                        'left': (100 - settings.width) / 2 + '%',
                        'margin-top': 0
                        
                    });   
                }else{
                    $(targetSelector).css({
                        'height': settings.height,
                        'width': settings.width,  
                        'margin-left': -settings.width / 2,
                        'margin-top': -settings.height / 2,
                        'padding': settings.padding, 
                        'top':50 + '%',
                        'left':50 + '%'
                    });   
                }
                 return false;  
            });

            $(closeButtons).on('click',function(){
                $(targetSelector + ', .overlay').fadeOut('fast');
                $('body,html').css('overflow','auto');
                $('.overlay').unbind('touchmove');
                return false;
            });
        });
    };
}( jQuery ));