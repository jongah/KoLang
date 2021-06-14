$(".title").on("propertychange change keyup paste input",function(){
  var content = $(this).val(); /*입력값 받아오기*/
  if(length <= 16 && length >= 0){
      $(".title").css("font-size",'25rem');
      }else if (length > 16 && length <= 21 ){
      $(".title").css("font-size",'18rem');
      }
      else if(length > 15 && length <= 28){
      $(".title").css('font-size','6rem');
      }
      else if(length > 28){
      $(".title").css('font-size','4rem');
  }       
});