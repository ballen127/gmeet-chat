var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('lib/dropzone-5.7.0/dropzone.css');
(document.head||document.documentElement).appendChild(style);


var myDropzone;

function sendMessage() {
    myDropzone.removeAllFiles();
    $('.newTextarea').val('').height(24);
}

function updateOrigTextarea() {
    var str = $('.newTextarea').val();
    for (var i = 0; i < myDropzone.files.length; i++) {
        str += '\n<image link' + i + '>';
    }
    $('.origTextarea').val(str);
    if (str == '') {
        $('div.IOMpW.Cs0vCd').attr('tabindex', '-1').attr('aria-disabled', 'true').addClass('RDPZE');
    } else {
        $('div.IOMpW.Cs0vCd').attr('tabindex', '0').removeAttr('aria-disabled').removeClass('RDPZE');
    }
}

$('body').on('click', 'div.foXzLb.M9Bg4d', function() {
    Dropzone.autoDiscover = false;
    myDropzone = new Dropzone("div.vvTMTb", { url: "https://google.com"});
    $('div.vvTMTb').addClass('dropzone');

    myDropzone.on('addedfile', function(file) {
        updateOrigTextarea();
    });

    $('textarea.KHxj8b.tL9Q4c').addClass('origTextarea').hide();
    var newTextarea = '<textarea class="KHxj8b tL9Q4c newTextarea" data-rows="1" ' +
        'tabindex="0" aria-label="Send a message to everyone" maxlength="500" ' +
        'name="chatTextInput" data-max-rows="5" data-initial-value style="height: 24px;" ' +
        'badinput="false" dir="ltr"></textarea>';
    $('div.Pc9Gce.Wic03c').append(newTextarea);

    $('.newTextarea').keyup(function(e) {
        updateOrigTextarea();
        var lines = $(this).val().split(/\r|\r\n|\n/);
        $(this).height(Math.max(lines.length * 20, 24));
    }).keydown(function(e) {
        var code = e.keyCode || e.which;
        if (code == 13 && !e.shiftKey) {
            sendMessage();
        } 
    });

});

$('body').on('click', 'div.IOMpW.Cs0vCd', function() {
    sendMessage();
});

document.addEventListener("DOMContentLoaded", function() {
    
});