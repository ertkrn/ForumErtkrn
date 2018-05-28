var mySet2 = setInterval(function () {
    var dgr = $('#rsklm').attr('src');
    if (dgr == "/Content/Images/ertkrn-rseskslsasm/rseskslsasm.jpg") {
        $('#rsklm').attr('src', '/Content/Images/ertkrn-rseskslsasm/rseskslsasm2.jpg');
    }
    else {
        $('#rsklm').attr('src', '/Content/Images/ertkrn-rseskslsasm/rseskslsasm.jpg');
    }
}, 1500);