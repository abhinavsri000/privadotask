let timer ; 
let returntext;

function start(){
    returntext = "pause"; 
    mm = parseInt(document.getElementById("mm").innerHTML) 
    ss = parseInt(document.getElementById("ss").innerHTML) 
    timer = setInterval(function(){
        if (ss == 59){ ss=0; ++mm ;}
        else if (mm == 5){ complete();}
        else if (ss < 60 ){ ++ss ;}
        if (mm <= 9 ){
            mmm = "0" + mm;
        }else{ mmm=mm;}
        if (ss <= 9 ){
            sss = "0" + ss;
        }else{sss=ss;}
        document.getElementById("mm").innerHTML = mmm ;
        document.getElementById("ss").innerHTML = sss ;
    },10)
}
function pause(){
    returntext = "start";
    clearInterval(timer);
}
function complete(){
    clearInterval(timer);
    document.getElementById("mm").style.color = 'red';
    document.getElementById("ss").style.color = 'red';
    document.getElementById("seperator").style.color = 'red';
    document.getElementById("controlbtn").innerHTML = 'reset';
}
function reset(){
    returntext = "start";
    document.getElementById("mm").innerHTML = '00';
    document.getElementById("ss").innerHTML = '00';
    document.getElementById("mm").style.color = 'black';
    document.getElementById("ss").style.color = 'black';
    document.getElementById("seperator").style.color = 'black';
}

function clicked(){
    btntext = document.getElementById("controlbtn").innerHTML; 
   
    if (btntext == "start") {
        start();
             
    } else if ( btntext == "pause") {
        pause();
          
    } else if ( btntext == "reset") {
        reset();
    }
    document.getElementById("controlbtn").innerHTML = returntext;
}