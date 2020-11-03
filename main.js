$('.next').click(function(){
   var actImg = $('img.active')

   actImg.removeClass('active')

   if(!actImg.hasClass('last')){
      actImg.next().addClass('active')
   }else{
      $('img.first').addClass('active')
   }
})

$('.prev').click(function(){
   var actImg = $('img.active')

   actImg.removeClass('active')

   if(!actImg.hasClass('first')){
      actImg.prev().addClass('active')
   }else{
      $('img.last').addClass('active')
   }
})

$(document).keydown(function(left){
  if(left.keyCode == 37) {
     var actImg = $('img.active')

     actImg.removeClass('active')

     if(!actImg.hasClass('first')){
        actImg.prev().addClass('active')
     }else{
        $('img.last').addClass('active')
     }
  }
})

$(document).keydown(function(right){
  if(right.keyCode == 39) {
     var actImg = $('img.active')

     actImg.removeClass('active')

     if(!actImg.hasClass('last')){
        actImg.next().addClass('active')
     }else{
        $('img.first').addClass('active')
     }
  }
})
