// Select

var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowTcon = document.getElementById("arrowIcon");


selectField.onclick = function(){
  list.classList.toggle("hide");
  arrowIcon.classList.toggle('rotate');
  
}




for (options of options){
  options.onclick = function(){

    // $("#main-div").find(".options").first().addClass("disabled")
 
  
    
    // inner active class
    $('#main-div').find('.selected-active').removeClass('selected-active');
    $(this).addClass("selected-active");

    // outer class active 
    $(document.getElementById('selectField')).addClass("selected-active");
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide")
    arrowIcon.classList.toggle('rotate');
  }
}



// Select2

var selectField2 = document.getElementById('selectField2');
var selectText2 = document.getElementById('selectText2');
var options2 = document.getElementsByClassName("options2");
var list2 = document.getElementById("list2");
var arrowTcon2 = document.getElementById("arrowIcon2");


selectField2.onclick = function(){
  list2.classList.toggle("hide2");
  arrowIcon2.classList.toggle('rotate2');
  
}



for (options2 of options2){
  options2.onclick = function(){

    
    
    // inner active class
    $('#main-div2').find('.selected-active2').removeClass('selected-active2');
    $(this).addClass("selected-active2");

    // outer class active 
    $(document.getElementById('selectField2')).addClass("selected-active2");
    selectText2.innerHTML = this.textContent;
    list2.classList.toggle("hide2")
    arrowIcon2.classList.toggle('rotate2');
  }
}




var selectField3 = document.getElementById('selectField3');
var selectText3 = document.getElementById('selectText3');
var options3 = document.getElementsByClassName("options3");
var list3 = document.getElementById("list3");


selectField3.onclick = function(){
list3.classList.toggle("hide3");
}



  // inner active class
  $('#main-div3').find('.selected-active3').removeClass('selected-active3');
  $(this).addClass("selected-active3");

  // outer class active 
  $(document.getElementById('selectField3')).addClass("selected-active3");

  

for (options3 of options3){
  options3.onclick = function(){

    var topElement;
    var selectedElement = this;
    $( ".options3" ).each(function( index, element) {
      if($($(selectedElement).html()).html() === $($(element).html()).html()){
        topElement = element;
      }
      
    });
    $(list3).prepend(topElement);
    selectText3.innerHTML = this.textContent; 
    list3.classList.toggle("hide3");
    

  }
}


// Chnage input\textarea background

$(document).ready(function() {
  $('.change-background').on('change', function() {
    var $this = $(this);
    var value = $.trim($this.val());
    $this.toggleClass('filled-background', value.length !== 0);
  }).change();
  
});



