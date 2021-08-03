$(function() {
    $('#btn-about').click(function() { clickBtn('about'); return false; });
    $('#btn-contact').click(function() { clickBtn('contact'); return false; });
    $('#btn-connect').click(function() { clickBtn('connect'); return false; });
    $('#btn-key').click(function() { clickBtn('key'); return false; });
    
    prettyPrint();
    
    $(document).on('click','textarea', function(){ this.focus(); this.select(); });
});

function clickBtn(name) {
    if ($('#btn-' + name).hasClass('highlighted')) {
        closeTab(name);
    } else {
        const tabs = ['about', 'contact', 'connect', 'key'];
        for (let i = 0; i < tabs.length; i ++) {
            let t = tabs[i];
            if ($('#btn-' + t).hasClass('highlighted')) closeTab(t);
        }
        openTab(name);
    }
}

function openTab(name) {
    $('#headline').animate({'top': '-=32%'}, 'slow');
    $('#btn-' + name).addClass('highlighted');
    $('#' + name).delay('slow').fadeIn('slow');
}

function closeTab(name) {
    $('#' + name).fadeOut('fast');
    $('#btn-' + name).removeClass('highlighted');
    $('#headline').animate({'top': '+=32%'}, 'fast');
}
