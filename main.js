
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j : 0,
    k : 0
};

function nextmid()
{
    console.log("inside function nextmid");
    console.log(state.i);
    var mid=document.getElementById("mid");
    if(state.i===2){
        mid.setAttribute("class","mid-3");
        state.i=0;
        }
    else
    if(state.i===1){
        mid.setAttribute("class","mid-2");
        state.i=2;
        console.log(state.i);
        }
    else
    if(state.i===0){
        mid.setAttribute("class","mid-1");
        state.i=1;
        console.log(state.i);
        }
}

function nextbottom()
{
    console.log("inside function nextbottom");
    console.log(state.j);
    var bottom=document.getElementById("bottom");
    if(state.j===0){
    bottom.setAttribute("class","bottom-1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    bottom.setAttribute("class","bottom-2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    bottom.setAttribute("class","bottom-3");
         state.j=0;
    }
    
}

function nexttop()
{
    console.log("inside function nexttop");
    
    console.log(state.k);
    var hairf=document.getElementById("top");
    
    if(state.k===0){
    hairf.setAttribute("class","top-1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","top-2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hairf.setAttribute("class","top-3");
         state.k=0;
    }
    
}