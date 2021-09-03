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