var mySet = setTimeout(function () {
    $('#footer').hide();
    $('#scrlltp').hide();
}, 5000);

var myList = window.addEventListener('touchstart', function () {
    $('#footer').removeAttr('style');
    $('#scrlltp').removeAttr('style');
    setTimeout(function () {
        $('#footer').hide();
        $('#scrlltp').hide();
    }, 5000);
});