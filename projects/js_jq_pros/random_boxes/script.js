alert('Rules and additional information of the Game: \n 1 Objects of random shapes(circle,square) will appear on window.\n 2 You much click on the shape which appears as soon as possible.\n 3 Inital response will be taken for reference.\n 4.If your response time cross the maximum time you took before, the game ends.\n 5.The score board starts after taking a response from you, and it considers it as the response which took maximum time and starts the game.');


var boxId = document.getElementById("box");
var displayedTime,clickedTime,reactionTime;
var time,selectShape,nTop,nBottom;
var maxTime=0,i=0,count=0,score=0;

function randColor(){
    var table='0123456789ABCDEF'.split('');
    var color='#';
    for(var i=0;i<6;i++){
        color+= table[ Math.round(Math.random()*15)];
    }
    return color;
}

function dispBox(){
    time= Math.random();
    console.log("time set out: "+time);
    setTimeout(function(){
        selectShape = Math.random();
        console.log(selectShape);
        if(selectShape<0.5)
            boxId.style.borderRadius="100px";
        else
            boxId.style.borderRadius="0";
        var color = randColor();
        console.log(color);
        boxId.style.backgroundColor = color;
        boxId.style.display = "block";
        var top=Math.random(),left=Math.random();
        top*=400;
        left*=500;
        boxId.style.top=top+"px";
        boxId.style.left=left+"px";
        displayedTime = Date.now();
    },time);
}


boxId.onclick = function(){
    clickedTime = Date.now();
    reactionTime = (clickedTime - displayedTime-1)/1000;
    if(count==0){
        maxTime=reactionTime;
        count++;
        document.getElementById("board").innerHTML= "Max-time: " + maxTime + " " + "Score =" + score;
    }
    else{
        if(reactionTime>maxTime){
            alert(' Your reaction time was greater than the max-time:\n The max-time-limit: '+maxTime+'\n Your reaction time: '+reactionTime+'\n Your score is: '+score+" \nTry again to score HIGHER\n");
            score=0;
            count=0;
            maxTime=undefined;
            document.getElementById("board").innerHTML= "GAME RE-STARTED";
        }
        else{
            maxTime=reactionTime;
            score+=10;
            document.getElementById("board").innerHTML= "Max-time: " + maxTime + " " + "Score =" + score;
        }
        
    }
    boxId.style.display = "none";
    dispBox();
}

dispBox();

