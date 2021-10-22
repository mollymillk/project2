$(function() {
    $("input[name='NCS']").NCS({
        categoryNames: ["ВЗРОСЛЫЕ", "ДЕТИ", "МЛАДЕНЦЫ"],
        categoryValues: false,
        minValue: 0,
        maxValue: 10,
        closeOnOutsideClick: true,
        showText: true,
        delimiter: ", ",
        align: "left",
        fade: true,
        useDisplay: true,
        showZero: false,
    });
})

$(function() {
    $('.NCS.close').before('<button class="clear_button" onclick="clear()">ОЧИСТИТЬ</button>')
})

function clear() {
    alert('hiii')
}


