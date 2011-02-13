$(document).ready(function() {
    
    var viewport_size = {width: 0, height: 0};
    $(window).resize(function(e) { sizeViewport(); });
    function sizeViewport() {
        viewport_size = {width: $(window).width(), height: $(window).height()};
        $('footer .content,#beats-input,#beats-input-display').css(
            {'height':      viewport_size.height - 20,
             'max-height':  viewport_size.height - 20}
        );
    }
    
    function initialize() {
        sizeViewport();
    }
    
    //$('#beats-input').bind('keydown', function() {
    //    $('#beats-input-display').text($('#beats-input').val());
    //});
    
    initialize();
});