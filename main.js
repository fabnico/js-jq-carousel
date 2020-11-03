$('.next').click(function(){
   var actImg = $('img.active')
   var actDot = $('i.active')

   actImg.removeClass('active')
   actDot.removeClass('active')

   if(!actImg.hasClass('last')){
      actImg.next().addClass('active')
   }else{
      $('img.first').addClass('active')
   }

   if(!actDot.hasClass('last')){
      actDot.next().addClass('active')
   }else{
      $('i.first').addClass('active')
   }

})

$('.prev').click(function(){
   var actImg = $('img.active')
   var actDot = $('i.active')

   actImg.removeClass('active')
   actDot.removeClass('active')

   if(!actImg.hasClass('first')){
      actImg.prev().addClass('active')
   }else{
      $('img.last').addClass('active')
   }

   if(!actDot.hasClass('first')){
      actDot.prev().addClass('active')
   }else{
      $('i.last').addClass('active')
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
