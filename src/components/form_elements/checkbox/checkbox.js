// $("input[type='checkbox']").change(function(){
//     if($(this).is(":checked")){
//         $(this).addClass("green"); 
//     }else{
//         $(this).removeClass("green");  
//     }
// });

// $(function(){
//     //Wrap each checkbox with a span using your class
//     $(':checkbox').wrap('<span class="selected" />');
//   });

// $("input[type='checkbox']").change(function(){
//      if($(this).is(":checked")){
//         $('.checkbox_input').after('<img src="/img/check_mark.svg"/>')
//      }})
//$scope.imageToUse =  require(`../checkbox/img/check_mark.svg`)

document.getElementById('.checkbox_input').addClass('checked').style.backgroundImage = "url(/img/someImage.jpg)"
document.getElementById('.checkbox_label').addClass('before').style.backgroundImage = "url(/img/someImage.jpg)"
document.querySelector('div').style.backgroundImage= "url('pinkFlower.jpg') n";
