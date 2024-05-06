let topClothing = 0;
let midClothing = 0;
let bottomClothing = 0;

function prevButtonClick(element) {
    let clothingArea = document.getElementById(element).children;

    if(element == 'top-stack') {
        topClothing--;
        if(topClothing <=0 ){
            topClothing = clothingArea.length;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == topClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    if(element == 'mid-stack') {
        midClothing--;
        if(midClothing <=0 ){
            midClothing = clothingArea.length;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == midClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    if(element == 'bottom-stack') {
        bottomClothing--;
        if(bottomClothing <=0 ){
            bottomClothing = clothingArea.length;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == bottomClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    console.log('top: ' + topClothing);
    console.log('mid: ' + midClothing);
    console.log('bottom: ' + bottomClothing);
}

function nextButtonClick(element) {
    let clothingArea = document.getElementById(element).children;

    if(element == 'top-stack') {
        topClothing++;
        if(topClothing >=clothingArea.length ){
            topClothing = 0;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == topClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    if(element == 'mid-stack') {
        midClothing++;
        if(midClothing >=clothingArea.length ){
            midClothing = 0;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == midClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    if(element == 'bottom-stack') {
        bottomClothing++;
        if(bottomClothing >=clothingArea.length ){
            bottomClothing = 0;
        };
        for(i=0;i<clothingArea.length;i++){
            if(i == bottomClothing){
                clothingArea[i].setAttribute("style", "opacity:1");
            } else {
                clothingArea[i].setAttribute("style", "opacity:0");
            }
        }
    };

    console.log('top: ' + topClothing);
    console.log('mid: ' + midClothing);
    console.log('bottom: ' + bottomClothing);
}

window.addEventListener('load', function() {

    const topPrev = document.getElementById('topPrev');
    const topNext = document.getElementById('topNext');
    const midPrev = document.getElementById('midPrev');
    const midNext = document.getElementById('midNext');
    const bottomPrev = document.getElementById('bottomPrev');
    const bottomNext = document.getElementById('bottomNext');

    topPrev.addEventListener('click', () => {
        prevButtonClick('top-stack');
    });

    topNext.addEventListener('click', () => {
        nextButtonClick('top-stack');
    });

    midPrev.addEventListener('click', () => {
        prevButtonClick('mid-stack');
    });

    midNext.addEventListener('click', () => {
        nextButtonClick('mid-stack');
    });

    bottomPrev.addEventListener('click', () => {
        prevButtonClick('bottom-stack');
    });

    bottomNext.addEventListener('click', () => {
        nextButtonClick('bottom-stack');
    });

})