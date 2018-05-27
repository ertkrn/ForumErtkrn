$('#footer a').click(function () {
    var b = document.getElementById("menuid").innerHTML;
    var a = $('#menuid');
    a.remove();
    $('#' + b + ' br').remove();
    var c = $(this).attr('id');
    var ekle = "<br /><strong id='menuid'>" + c + "</strong>";
    $(this).append(ekle);
});