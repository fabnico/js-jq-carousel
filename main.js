function moveForward(element,cssClass,position,elPosition){
   var actElement = element
   actElement.removeClass(cssClass)
   if(!actElement.hasClass(position)){
      actElement.next().addClass(cssClass)
   }else{
      $(elPosition).addClass(cssClass)
   }
}

function moveBack(element,cssClass,position,elPosition){
   var actElement = element
   actElement.removeClass(cssClass)
   if(!actElement.hasClass(position)){
      actElement.prev().addClass(cssClass)
   }else{
      $(elPosition).addClass(cssClass)
   }
}

$('.next').click(function(){
   moveForward($('img.active'),'active','last','img.first')
   moveForward($('i.active'),'active','last','i.first')
})

$('.prev').click(function(){
   moveBack($('img.active'),'active','first','img.last')
   moveBack($('i.active'),'active','first','i.last')
})

$(document).keydown(function(right){
  if(right.keyCode == 39) {
    moveForward($('img.active'),'active','last','img.first')
    moveForward($('i.active'),'active','last','i.first')
  }
})

$(document).keydown(function(left){
   if(left.keyCode == 37) {
   moveBack($('img.active'),'active','first','img.last')
   moveBack($('i.active'),'active','first','i.last')
   }
})
