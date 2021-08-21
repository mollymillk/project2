
jQuery(function($){ 
$('#enter_calendar').datepicker({
    clearButton: true,
    //todayButton: new Date(),
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
          dp.$datepicker.append('<button type="button" class="uk-button uk-button-primary uk-button-small uk-width-1-1 uk-margin-small-bottom" ><i class="fas fa-check"></i> Ready</button>');
          dp.$datepicker.find('button').click(function() {
             dp.hide();
          });
       }
 },
 
})
},
)
