function imgForward(){
   var actImg = $('img.active')
   actImg.removeClass('active')
   if(!actImg.hasClass('last')){
      actImg.next().addClass('active')
   }else{
      $('img.first').addClass('active')
   }
}

function dotForward(){
   var actDot = $('i.active')
   actDot.removeClass('active')
   if(!actDot.hasClass('last')){
      actDot.next().addClass('active')
   }else{
      $('i.first').addClass('active')
   }
}

function imgBack(){
   var actImg = $('img.active')
   actImg.removeClass('active')
   if(!actImg.hasClass('first')){
      actImg.prev().addClass('active')
   }else{
      $('img.last').addClass('active')
   }
}

function dotBack(){
   var actDot = $('i.active')
   actDot.removeClass('active')
   if(!actDot.hasClass('first')){
      actDot.prev().addClass('active')
   }else{
      $('i.last').addClass('active')
   }
}

$('.next').click(function(){
   imgForward()
   dotForward()
})

$('.prev').click(function(){
   imgBack()
   dotBack()
})

$(document).keydown(function(right){
  if(right.keyCode == 39) {
    imgForward()
    dotForward()
  }
})

$(document).keydown(function(left){
   if(left.keyCode == 37) {
   imgBack()
   dotBack()
   }
})
