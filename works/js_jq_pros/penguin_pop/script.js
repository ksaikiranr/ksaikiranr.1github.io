var score=0,luck=Math.random()*100;
function scoreupd(){
    document.getElementById("score").innerHTML=" "+score;
}
document.getElementById("penguin1").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin1").style.backgroundImage="url(media/penguin_1.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin1").style.backgroundImage="url(media/mound_1.png)";
        document.activeElement("penguin1").hover.backgroundImage="url(media/mound_1_hover.png)";
        },1000);
        }
    else{
        document.getElementById("penguin1").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin1").style.backgroundImage="url(media/mound_1.png)";
    }
}
document.getElementById("penguin2").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin2").style.backgroundImage="url(media/penguin_2.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin2").style.backgroundImage="url(media/mound_2.png)";
        },1000);
        }
    else{
        document.getElementById("penguin2").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin2").style.backgroundImage="url(media/mound_2.png)";
    }
}
document.getElementById("penguin3").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin3").style.backgroundImage="url(media/penguin_3.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin3").style.backgroundImage="url(media/mound_3.png)";
        },1000);
        }
    else{
        document.getElementById("penguin3").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin3").style.backgroundImage="url(media/mound_3.png)";
    }
}
document.getElementById("penguin4").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin4").style.backgroundImage="url(media/penguin_4.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin4").style.backgroundImage="url(media/mound_4.png)";
        },1000);
        }
    else{
        document.getElementById("penguin4").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin4").style.backgroundImage="url(media/mound_4.png)";
    }
}
document.getElementById("penguin5").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin5").style.backgroundImage="url(media/penguin_5.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin5").style.backgroundImage="url(media/mound_5.png)";
        },1000);
        }
    else{
        document.getElementById("penguin5").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin5").style.backgroundImage="url(media/mound_5.png)";
    }
}
document.getElementById("penguin6").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin6").style.backgroundImage="url(media/penguin_6.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin6").style.backgroundImage="url(media/mound_6.png)";
        },1000);
        }
    else{
        document.getElementById("penguin6").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin6").style.backgroundImage="url(media/mound_6.png)";
    }
}
document.getElementById("penguin7").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin7").style.backgroundImage="url(media/penguin_7.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin7").style.backgroundImage="url(media/mound_7.png)";
        },1000);
        }
    else{
        document.getElementById("penguin7").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin7").style.backgroundImage="url(media/mound_7.png)";
    }
}
document.getElementById("penguin8").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin8").style.backgroundImage="url(media/penguin_8.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin8").style.backgroundImage="url(media/mound_1.png)";
        },1000);
        }
    else{
        document.getElementById("penguin8").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin8").style.backgroundImage="url(media/mound_8.png)";
    }
}
document.getElementById("penguin9").onclick=function(){
    console.log(luck);
    if(luck>25){
        document.getElementById("penguin9").style.backgroundImage="url(media/penguin_4.png)";
        score++;
        scoreupd();
        luck=Math.random()*100;
        setTimeout(function(){ document.getElementById("penguin9").style.backgroundImage="url(media/mound_2.png)";
        },1000);
        }
    else{
        document.getElementById("penguin9").style.backgroundImage="url(media/yeti.png)";
        alert("You have found yeti, Your score is: "+ score);
        score=0;
        scoreupd();
        luck=Math.random()*100; document.getElementById("penguin9").style.backgroundImage="url(media/mound_2.png)";
    }
}

