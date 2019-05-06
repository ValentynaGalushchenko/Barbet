// change background color

$(document).ready(function() {
    MoveToChangeColor()
});

function MoveToChangeColor() {
    var $win = $(window),
        width = 0,
        height = 0,
        rgba = [],
        getWidth = function() {
            width = $win.width();
            height = $win.height()
        };
    $win.resize(getWidth).mousemove(function(e) {
        rgba = [Math.round(e.pageX / width * 100), 
                Math.round(e.pageY / height * 233), 
                237, 0.3];
        $(document.body).css('background', 'rgba(' + rgba.join(',') + ')')
    }).resize()
};

//copy mail

$('#copy').click(function(){
    $(this).text(' mail copied');
    setTimeout(function(){
    $('#copy').text('hello@barbet.space');
}, 3000);
});

function copyToClipboard(text) {
	var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
};