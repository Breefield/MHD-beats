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
    var sound = soundManager.createSound({
        id: 'a',
        url: '/sounds/sine-10-60.mp3',
        volume: 100,
        onfinish: function() {
            this.play();
        }
    });
    sound.play();
    
    // When we type beats in, what do?
    $('#beats-input').bind('keyup', function() { mergeBeats(); });
}

var beats = [];
function mergeBeats() {
    n_beats = [];
    $('#beats-input-display').empty();
    var lines = $('#beats-input').val();
    lines = lines.split("\n");
    $.each(lines, function(i, v) {
        var d = processLine(i, v);
        n_beats[i] = {c: d, v: jQuery.trim(v)};
        $('#beats-input-display').append('<li></li>');
    });
    beats = n_beats;
}

function processLine(i, v) {
    var m = v.match(/^(\s+?)(?=[^\s].*?$)/ig);
    s = (m != null) ? m.length : 0;
    return Math.ceil(s/2);
}