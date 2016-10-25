$(document).ready(function(){
   var x = "x";
    var o = "o";
    var turn = 0;
    var user = 0;
    // 0-o 1-X
    var temp,rand
    var i,j=1;
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');
    var arr = [ $('#spot1'), $('#spot2'), $('#spot3'), $('#spot4') ,$('#spot5'), $('#spot6'), $('#spot7'), $('#spot8'), $('#spot9')];
    function getr(){
        temp = Math.floor(Math.random()*9);
        return temp;
    }
    function playerx(){
        while(j){
            i = getr();
            console.log(i);
            if( ! $(arr[i]).hasClass('disable') ){
                $(arr[i]).text('X');
                $(arr[i]).addClass('x');
                j=0;
            }
        }
        j=1;
        $(arr[i]).addClass('disable');       
    }
    
$('#board li').on('click' , function() {
    turn++;
    if(user==0)
        temp=o;
    if(user==0){
        if(! $(this).hasClass('disable')){
            $(this).text('O');
            $(this).addClass('o');
            $(this).addClass('disable');
            user=1;
    }
    else{
        alert('Spot is marked!');
    }
    }
    else
        alert('Its computers turn, wait for your turn.\nYour turn comes after computer makes the move.');


        if( spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') || 
            spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
            spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
            spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
            spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
            spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
        ){

                alert('Congrats, You(o) won!');
                setTimeout(function(){
                $('#board li').text('+');
                turn=0;
                $('#board li').removeClass('disable');
                $('#board li').removeClass('o');
                $('#board li').removeClass('x'); 
                },2000);
        }
        else if(spot1.hasClass('x') && spot2.hasClass('x') &&                           spot3.hasClass('x') || 
                spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') 
        ){  
            alert('Computer(X) wins, Try again!');
                setTimeout(function(){
                $('#board li').text('+');
                turn=0;
                $('#board li').removeClass('disable');
                $('#board li').removeClass('o');
                $('#board li').removeClass('x'); 
                },2000);    
        }
        else if( turn == 9){
            alert('Tie Game!, Lets try again');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');    
            turn = 0;
        }
    if(user==1){
        setTimeout(function(){
        playerx();
        turn++;
        user=0;
        },10);
    }
    
    });
        //rest
        
        $('#reset').on('click',function(){
            $('#board li').text('x');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turn =0;  
        });
});
