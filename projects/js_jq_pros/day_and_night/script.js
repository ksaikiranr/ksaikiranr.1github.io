var temp=1;
$('#orb').click(function(){
   if( $(this).hasClass('sun')){
       $(this).removeClass('sun').addClass('moon');
   } 
    else{
        $(this).removeClass('moon').addClass('sun');
    }
   if( temp==1 ){
       $('body').css('background-color','black');
       temp=0;
   }
    else{
        $('body').css('background-color','blue');
        temp=1;
    }
});