var selectedbox ;
var unselectedbox ;

function initview(width,height,color,id){
    id.style.width = width ;
    id.style.height = height ;
    id.style.backgroundColor = color;
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
} 

function placebox(id) {
    le = document.getElementById('playground').offsetLeft;
    to = document.getElementById('playground').offsetTop;
    id.style.position = "absolute";
    id.style.left = `${randomNumber(le,le+500)}px`;
    id.style.top = `${randomNumber(to,to+500)}px`;
}

function selected(id){
    if(id == 'box1'){
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor= "blue";
    selectedbox = box1;
    unselectedbox = box2;
    }else{
        box2.style.backgroundColor = "green";
        box1.style.backgroundColor = "red";
        selectedbox = box2;
        unselectedbox = box1;
    }
}
function validate(){
    return Math.abs( parseInt(box2.style.left) - parseInt(box1.style.left) ) > 101 || Math.abs( parseInt(box2.style.top) - parseInt(box1.style.top)) > 101
}

function init()
{
    initview('600px','600px','pink',playground)
    initview('100px','100px','red',box1)
    initview('100px','100px','blue',box2)
    placebox(box1) 
    while(true){
        placebox(box2)
        if(validate()){ break ;}
    }
}

document.onkeydown = function(e) {
    switch (e.key) { 
        case 'ArrowLeft': 
            if (parseInt(selectedbox.style.left) > playground.offsetLeft  ){
                if(parseInt(selectedbox.style.left)- parseInt(unselectedbox.style.left) == 101 && Math.abs(parseInt(box1.style.top)-parseInt(box2.style.top)) < 101){break;}
            selectedbox.style.left = `${parseInt(selectedbox.style.left) - 1}px`;
            }
            break; 
        case 'ArrowUp': 
            if (parseInt(selectedbox.style.top) > playground.offsetTop ){
                if((parseInt(selectedbox.style.top) - parseInt(unselectedbox.style.top))==101 && Math.abs(parseInt(box1.style.left)-parseInt(box2.style.left))< 101){break;}
                selectedbox.style.top = `${parseInt(selectedbox.style.top) - 1}px`;
            }
            break; 
        case 'ArrowRight':  
            if (parseInt(selectedbox.style.left) < playground.offsetLeft + 500 ){
                if(parseInt(unselectedbox.style.left)- parseInt(selectedbox.style.left) == 101 && Math.abs(parseInt(box1.style.top)-parseInt(box2.style.top)) < 101){break;}    
                selectedbox.style.left = `${parseInt(selectedbox.style.left) + 1}px`;
            }
            break; 
        case 'ArrowDown': 
            if (parseInt(selectedbox.style.top) < playground.offsetTop + 500 ){
                if(parseInt(unselectedbox.style.top) - parseInt(selectedbox.style.top)==101 && Math.abs(parseInt(box1.style.left)-parseInt(box2.style.left))< 101){break;}
                selectedbox.style.top = `${parseInt(selectedbox.style.top) + 1}px`;
            }
    } 
};

