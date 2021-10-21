jQuery(function($){ 
$('#enter_calendar').datepicker({
  navTitles : {
    days: 'MM <i>yyyy</i>',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
    clearButton: true,
    minDate: new Date(),
    language: {
      today: "ПРИМЕНИТЬ",
      clear: "ОЧИСТИТЬ",
      daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    },
    onSelect: function (fd, d, picker) { 
      $("#enter_calendar").val(fd.split("-")[0]);
      $("#outgo_calendar").val(fd.split("-")[1]);
    },
   
  onShow: function (dp) {
       if (dp.$datepicker.find('button').html()===undefined) {
          dp.$datepicker.append('<button type="button" class="uk-button" ><i class="fas fa-check"></i>ПРИМЕНИТЬ</button>');
          dp.$datepicker.find('button').click(function() {
             dp.hide();
          });
       }
},
 
}
)
},
)
