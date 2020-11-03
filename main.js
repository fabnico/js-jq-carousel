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
