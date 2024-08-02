$(function () {

    $('#homeKey').click(function () {
        $('#menuBar').animate({width: 'toggle'})
    })

    $('#menuBack').click(function () {
        $('#menuBar').animate({width: 'toggle'})
    })

    $(document).click(function (event) {
        if (!$(event.target).closest('#menuBar, #homeKey').length) {
            if ($('#menuBar').is(":visible")) {
                $('#menuBar').animate({width: 'toggle'});
            }
        }
    });

})
