// var $start = $('#enter_calendar'),
//     $end = $('#outgo_calendar');

jQuery(function($){ 
$('#enter_calendar').datepicker({
    clearButton: true,
    todayButton: new Date(),
    language: {
      today: "ПРИМЕНИТЬ",
      clear: "ОЧИСТИТЬ",
      daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    },
    onSelect: function (fd, d, picker) { 
      $("#enter_calendar").val(fd.split("-")[0]);
      $("#outgo_calendar").val(fd.split("-")[1]);
    }
  //   onSelect: function (fd, date) {
  //     $end.data('datepicker')
  //             .update('minDate', date);
  //     $end.focus();
  //   }
  //   })
  //   $end.datepicker({
  //     onSelect: function (fd, date) {
  //         $start.data('datepicker')
  //                 .update('maxDate', date)
  //     }
  // })
  })
})
