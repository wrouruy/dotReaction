let num = 0;
let targetCatch = document.getElementById('target')
let switchChange = 0;
// let resultSpeed = speedTarget.value;
// ціль гри
target.onclick = function(){
    wonBlock.style.display = 'flex';
    setTimeout(() => {
        wonBlock.style.color = 'black';
        wonBlock.style.backgroundColor = 'grey';
        winButton.style.backgroundColor = '#000';
        winButton.style.color = 'grey';
        crown.style.color = 'gold';
    },1)
}

// при наведені миші цілі відбувається:
targetCatch.onmouseenter = function () {
    let xPos = Math.floor(Math.random() * 97);
    let yPos = Math.floor(Math.random() * 97);
    let xfalseOne = Math.floor(Math.random() * 80);
    let yfalseOne = Math.floor(Math.random() * 80);
    let xfalseTwo = Math.floor(Math.random() * 80);
    let yfalseTwo = Math.floor(Math.random() * 80);
    let xfalseThree = Math.floor(Math.random() * 80);
    let yfalseThree = Math.floor(Math.random() * 80);


    target.style.top = yPos + '%';
    target.style.left = xPos + '%';


    falseTargetOne.style.top = yfalseOne + '%';
    falseTargetOne.style.left = xfalseOne + '%';

    falseTargetTwo.style.top = yfalseTwo + '%';
    falseTargetTwo.style.left = xfalseTwo + '%';

    falseTargetThree.style.top = yfalseThree + '%';
    falseTargetThree.style.left = xfalseThree + '%';

    num++;
    target.innerText = num;
    
    if(num > 0){
        if(switchChange == 1){
            comment.style.color = 'rgb(34, 34, 34)';
        } else if(switchChange == 0){
            comment.style.color = 'white';
        }
        
        setTimeout (() => {
            comment.style.display = 'none';
        }, 1000)
    }

    if(num === 10){
        target.style.transition = 0.5 + 's';
        target.style.width = 60 + 'px';
        target.style.height = 60 + 'px';
        target.style.fontSize = 140 + '%'

        falseTargetOne.style.transition = 0.5 + 's';
        falseTargetOne.style.width = 60 + 'px';
        falseTargetOne.style.height = 60 + 'px';
        falseTargetOne.style.fontSize = 100 + '%'

        falseTargetTwo.style.transition = 0.5 + 's';
        falseTargetTwo.style.width = 60 + 'px';
        falseTargetTwo.style.height = 60 + 'px';
        falseTargetTwo.style.fontSize = 100 + '%'

        falseTargetThree.style.transition = 0.5 + 's';
        falseTargetThree.style.width = 60 + 'px';
        falseTargetThree.style.height = 60 + 'px';
        falseTargetThree.style.fontSize = 100 + '%'
    } else if(num === 20){
        target.style.transition = 0.6 + 's';
        target.style.width = 70 + 'px';
        target.style.height = 70 + 'px';
        target.style.fontSize = 170 + '%'

        falseTargetOne.style.transition = 0.6 + 's';
        falseTargetOne.style.width = 70 + 'px';
        falseTargetOne.style.height = 70 + 'px';
        falseTargetOne.style.fontSize = 130 + '%'

        falseTargetTwo.style.transition = 0.6 + 's';
        falseTargetTwo.style.width = 70 + 'px';
        falseTargetTwo.style.height = 70 + 'px';
        falseTargetTwo.style.fontSize = 130 + '%'

        falseTargetThree.style.transition = 0.6 + 's';
        falseTargetThree.style.width = 70 + 'px';
        falseTargetThree.style.height = 70 + 'px';
        falseTargetThree.style.fontSize = 130 + '%'
    } else if(num === 30){
        target.style.transition = 0.7 + 's';
        target.style.width = 80 + 'px';
        target.style.height = 80 + 'px';
        target.style.fontSize = 220 + '%'

        falseTargetOne.style.transition = 0.7 + 's';
        falseTargetOne.style.width = 80 + 'px';
        falseTargetOne.style.height = 80 + 'px';
        falseTargetOne.style.fontSize = 140 + '%'

        falseTargetTwo.style.transition = 0.7 + 's';
        falseTargetTwo.style.width = 80 + 'px';
        falseTargetTwo.style.height = 80 + 'px';
        falseTargetTwo.style.fontSize = 140 + '%'

        falseTargetThree.style.transition = 0.7 + 's';
        falseTargetThree.style.width = 80 + 'px';
        falseTargetThree.style.height = 80 + 'px';
        falseTargetThree.style.fontSize = 140 + '%'
    } else if(num === 40){
        target.style.transition = 0.8 + 's';
        target.style.width = 90 + 'px';
        target.style.height = 90 + 'px';
        target.style.fontSize = 290 + '%'

        falseTargetOne.style.transition = 0.8 + 's';
        falseTargetOne.style.width = 90 + 'px';
        falseTargetOne.style.height = 90 + 'px';
        falseTargetOne.style.fontSize = 200 + '%'

        falseTargetTwo.style.transition = 0.8 + 's';
        falseTargetTwo.style.width = 90 + 'px';
        falseTargetTwo.style.height = 90 + 'px';
        falseTargetTwo.style.fontSize = 200 + '%'

        falseTargetThree.style.transition = 0.8 + 's';
        falseTargetThree.style.width = 90 + 'px';
        falseTargetThree.style.height = 90 + 'px';
        falseTargetThree.style.fontSize = 200 + '%'
    } else if(num === 50){
        target.style.transition = 0.9 + 's';
        target.style.width = 100 + 'px';
        target.style.height = 100 + 'px';
        target.style.fontSize = 390 + '%'

        falseTargetOne.style.transition = 0.9 + 's';
        falseTargetOne.style.width = 100 + 'px';
        falseTargetOne.style.height = 100 + 'px';
        falseTargetOne.style.fontSize = 300 + '%'

        falseTargetTwo.style.transition = 0.9 + 's';
        falseTargetTwo.style.width = 100 + 'px';
        falseTargetTwo.style.height = 100 + 'px';
        falseTargetTwo.style.fontSize = 300 + '%'

        falseTargetThree.style.transition = 0.9 + 's';
        falseTargetThree.style.width = 100 + 'px';
        falseTargetThree.style.height = 100 + 'px';
        falseTargetThree.style.fontSize = 300 + '%'
    } else if(num === 60){
        target.style.transition = 1 + 's';
        target.style.width = 110 + 'px';
        target.style.height = 110 + 'px';
        target.style.fontSize = 480 + '%'

        falseTargetOne.style.transition = 1 + 's';
        falseTargetOne.style.width = 110 + 'px';
        falseTargetOne.style.height = 110 + 'px';
        falseTargetOne.style.fontSize = 400 + '%'

        falseTargetTwo.style.transition = 1 + 's';
        falseTargetTwo.style.width = 110 + 'px';
        falseTargetTwo.style.height = 110 + 'px';
        falseTargetTwo.style.fontSize = 400 + '%'

        falseTargetThree.style.transition = 1 + 's';
        falseTargetThree.style.width = 110 + 'px';
        falseTargetThree.style.height = 110 + 'px';
        falseTargetThree.style.fontSize = 400 + '%'
    } else if(num === 70){
        target.style.transition = 1.1 + 's';
        target.style.width = 120 + 'px';
        target.style.height = 120 + 'px';
        target.style.fontSize = 430 + '%'

        falseTargetOne.style.transition = 1.1 + 's';
        falseTargetOne.style.width = 120 + 'px';
        falseTargetOne.style.height = 120 + 'px';
        falseTargetOne.style.fontSize = 360 + '%'

        falseTargetTwo.style.transition = 1.1 + 's';
        falseTargetTwo.style.width = 120 + 'px';
        falseTargetTwo.style.height = 120 + 'px';
        falseTargetTwo.style.fontSize = 360 + '%'

        falseTargetThree.style.transition = 1.1 + 's';
        falseTargetThree.style.width = 120 + 'px';
        falseTargetThree.style.height = 120 + 'px';
        falseTargetThree.style.fontSize = 360 + '%'
    } else if(num === 80){
        target.style.transition = 1.2 + 's';
        target.style.width = 130 + 'px';
        target.style.height = 130 + 'px';
        target.style.fontSize = 510 + '%'

        falseTargetOne.style.transition = 1.2 + 's';
        falseTargetOne.style.width = 130 + 'px';
        falseTargetOne.style.height = 130 + 'px';
        falseTargetOne.style.fontSize = 470 + '%'

        falseTargetTwo.style.transition = 1.2 + 's';
        falseTargetTwo.style.width = 130 + 'px';
        falseTargetTwo.style.height = 130 + 'px';
        falseTargetTwo.style.fontSize = 470 + '%'

        falseTargetThree.style.transition = 1.2 + 's';
        falseTargetThree.style.width = 130 + 'px';
        falseTargetThree.style.height = 130 + 'px';
        falseTargetThree.style.fontSize = 470 + '%'
    } else if(num === 90){
        target.style.transition = 1.3 + 's';
        target.style.width = 140 + 'px';
        target.style.height = 140 + 'px';
        target.style.fontSize = 600 + '%'

        falseTargetOne.style.transition = 1.3 + 's';
        falseTargetOne.style.width = 140 + 'px';
        falseTargetOne.style.height = 140 + 'px';
        falseTargetOne.style.fontSize = 540 + '%'

        falseTargetTwo.style.transition = 1.3 + 's';
        falseTargetTwo.style.width = 140 + 'px';
        falseTargetTwo.style.height = 140 + 'px';
        falseTargetTwo.style.fontSize = 540 + '%'

        falseTargetThree.style.transition = 1.3 + 's';
        falseTargetThree.style.width = 140 + 'px';
        falseTargetThree.style.height = 140 + 'px';
        falseTargetThree.style.fontSize = 540 + '%'
    } else if(num === 100){
        target.style.transition = 1.5 + 's';
        target.style.width = 150 + 'px';
        target.style.height = 150 + 'px';
        target.style.fontSize = 430 + '%'

        falseTargetOne.style.transition = 1.5 + 's';
        falseTargetOne.style.width = 150 + 'px';
        falseTargetOne.style.height = 150 + 'px';
        falseTargetOne.style.fontSize = 400 + '%'

        falseTargetTwo.style.transition = 1.5 + 's';
        falseTargetTwo.style.width = 150 + 'px';
        falseTargetTwo.style.height = 150 + 'px';
        falseTargetTwo.style.fontSize = 400 + '%'

        falseTargetThree.style.transition = 1.5 + 's';
        falseTargetThree.style.width = 150 + 'px';
        falseTargetThree.style.height = 150 + 'px';
        falseTargetThree.style.fontSize = 400 + '%'
    }
}

//система здоров'я
let healt = 3;
oneHeart.onclick = function(){
    oneHeart.style.marginBottom = 2 + '%';
    oneHeart.style.backgroundColor = '#3953ff';
    twoHeart.style.marginBottom = 0 + '%';
    twoHeart.style.backgroundColor = 'black';
    threeHeart.style.marginBottom = 0 + '%';
    threeHeart.style.backgroundColor = 'black';
    infinityHeart.style.marginBottom = 0 + '%';
    infinityHeart.style.backgroundColor = 'black';

    heartSystem.style.display = 'flex';
    healt = 1;
    heartSystem.style.width = 80 + 'px';
    firstHeart.style.display = 'flex'
    noneFirstHeart.style.display = 'none';
    secondHeart.style.display = 'none'
    noneSecondHeart.style.display = 'none';
    thirtHeart.style.display = 'none';
    noneThirtHeart.style.display = 'none';
    setTimeout(() => {
        heartSystem.style.backgroundColor = 'rgba(140, 140, 140, 0.553)';
        heartSystem.style.borderColor = 'rgba(124, 124, 124, 0.553)';
        if(switchChange == 1){
            firstHeart.style.color = 'rgb(194, 194, 194)';
            noneFirstHeart.style.color = 'rgb(194, 194, 194)';
            secondHeart.style.color = 'rgb(194, 194, 194)';
            noneSecondHeart.style.color = 'rgb(194, 194, 194)';
            thirtHeart.style.color = 'rgb(194, 194, 194)';
            noneThirtHeart.style.color = 'rgb(194, 194, 194)';
        } else if(switchChange == 0){
            firstHeart.style.color = '#141414';
            noneFirstHeart.style.color = '#141414';
            secondHeart.style.color = '#141414';
            noneSecondHeart.style.color = '#141414';
            thirtHeart.style.color = '#141414';
            noneThirtHeart.style.color = '#141414';
        }
    }, 1000)
}
twoHeart.onclick = function(){
    oneHeart.style.marginBottom = 0 + '%';
    oneHeart.style.backgroundColor = 'black';
    twoHeart.style.marginBottom = 2 + '%';
    twoHeart.style.backgroundColor = '#3953ff';
    threeHeart.style.marginBottom = 0 + '%';
    threeHeart.style.backgroundColor = 'black';
    infinityHeart.style.marginBottom = 0 + '%';
    infinityHeart.style.backgroundColor = 'black';

    heartSystem.style.display = 'flex';
    healt = 2;
    heartSystem.style.width = 130 + 'px';
    firstHeart.style.display = 'flex'
    noneFirstHeart.style.display = 'none';
    secondHeart.style.display = 'flex'
    noneSecondHeart.style.display = 'none';
    thirtHeart.style.display = 'none';
    noneThirtHeart.style.display = 'none';
    setTimeout(() => {
        heartSystem.style.backgroundColor = 'rgba(140, 140, 140, 0.553)';
        heartSystem.style.borderColor = 'rgba(124, 124, 124, 0.553)';
        if(switchChange == 1){
            firstHeart.style.color = 'rgb(194, 194, 194)';
            noneFirstHeart.style.color = 'rgb(194, 194, 194)';
            secondHeart.style.color = 'rgb(194, 194, 194)';
            noneSecondHeart.style.color = 'rgb(194, 194, 194)';
            thirtHeart.style.color = 'rgb(194, 194, 194)';
            noneThirtHeart.style.color = 'rgb(194, 194, 194)';
        } else if(switchChange == 0){
            firstHeart.style.color = '#141414';
            noneFirstHeart.style.color = '#141414';
            secondHeart.style.color = '#141414';
            noneSecondHeart.style.color = '#141414';
            thirtHeart.style.color = '#141414';
            noneThirtHeart.style.color = '#141414';
        }
    }, 1000)
}


threeHeart.onclick = function(){
    oneHeart.style.marginBottom = 0 + '%';
    oneHeart.style.backgroundColor = 'black';
    twoHeart.style.marginBottom = 0 + '%';
    twoHeart.style.backgroundColor = 'black';
    threeHeart.style.marginBottom = 2 + '%';
    threeHeart.style.backgroundColor = '#3953ff';
    infinityHeart.style.marginBottom = 0 + '%';
    infinityHeart.style.backgroundColor = 'black';
    
    heartSystem.style.display = 'flex';
    healt = 3;
    heartSystem.style.width = 230 + 'px';
    firstHeart.style.display = 'flex'
    noneFirstHeart.style.display = 'none';
    secondHeart.style.display = 'flex'
    noneSecondHeart.style.display = 'none';
    thirtHeart.style.display = 'flex';
    noneThirtHeart.style.display = 'none';
    setTimeout(() => {
        heartSystem.style.backgroundColor = 'rgba(140, 140, 140, 0.553)';
        heartSystem.style.borderColor = 'rgba(124, 124, 124, 0.553)';
        if(switchChange == 1){
            firstHeart.style.color = 'rgb(194, 194, 194)';
            noneFirstHeart.style.color = 'rgb(194, 194, 194)';
            secondHeart.style.color = 'rgb(194, 194, 194)';
            noneSecondHeart.style.color = 'rgb(194, 194, 194)';
            thirtHeart.style.color = 'rgb(194, 194, 194)';
            noneThirtHeart.style.color = 'rgb(194, 194, 194)';
        } else if(switchChange == 0){
            firstHeart.style.color = '#141414';
            noneFirstHeart.style.color = '#141414';
            secondHeart.style.color = '#141414';
            noneSecondHeart.style.color = '#141414';
            thirtHeart.style.color = '#141414';
            noneThirtHeart.style.color = '#141414';
        }
    }, 1000)
}
infinityHeart.onclick = function(){
    oneHeart.style.marginBottom = 0 + '%';
    oneHeart.style.backgroundColor = 'black';
    twoHeart.style.marginBottom = 0 + '%';
    twoHeart.style.backgroundColor = 'black';
    threeHeart.style.marginBottom = 0 + '%';
    threeHeart.style.backgroundColor = 'black';
    infinityHeart.style.marginBottom = 2 + '%';
    infinityHeart.style.backgroundColor = '#3953ff';

    healt = Infinity;
    heartSystem.style.backgroundColor = 'transparent';
    heartSystem.style.borderColor = 'transparent';
    firstHeart.style.color = 'transparent';
    noneFirstHeart.style.color = 'transparent';
    secondHeart.style.color = 'transparent';
    noneSecondHeart.style.color = 'transparent';
    thirtHeart.style.color = 'transparent';
    noneThirtHeart.style.color = 'transparent';
    setTimeout(() => {
        heartSystem.style.display = 'none';
    }, 1000)

}


falseTargetOne.onmouseenter = function(){
    if(healt === 3){
        healt--;
        thirtHeart.style.display = 'none';
        noneThirtHeart.style.display = 'flex';

    } else if(healt === 2){
        healt--;
        secondHeart.style.display = 'none';
        noneSecondHeart.style.display = 'flex';

    } else if(healt == 1){
        healt--;
        firstHeart.style.display = 'none';
        noneFirstHeart.style.display = 'flex';

        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 1000);
        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 1500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 2000);
    } else if(healt == 0){
        alert('you lose');
        location.reload();
    }
}
falseTargetTwo.onmouseenter = function(){
    if(healt === 3){
        healt--;
        thirtHeart.style.display = 'none';
        noneThirtHeart.style.display = 'flex';
    } else if(healt === 2){
        healt--;
        secondHeart.style.display = 'none';
        noneSecondHeart.style.display = 'flex';
    } else if(healt == 1){
        healt--;
        firstHeart.style.display = 'none';
        noneFirstHeart.style.display = 'flex';

        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 1000);
        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 1500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 2000);

    } else if(healt == 0){
        alert('you lose');
        location.reload();
    }
}
falseTargetThree.onmouseenter = function(){
    if(healt === 3){
        healt--;
        thirtHeart.style.display = 'none';
        noneThirtHeart.style.display = 'flex';
    } else if(healt === 2){
        healt--;
        secondHeart.style.display = 'none';
        noneSecondHeart.style.display = 'flex';
    } else if(healt == 1){
        healt--;
        firstHeart.style.display = 'none';
        noneFirstHeart.style.display = 'flex';
        
        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 1000);
        setTimeout(() => {
            firstHeart.style.display = 'flex',
            noneFirstHeart.style.display = 'none'}, 1500);
        setTimeout(() => {
            firstHeart.style.display = 'none',
            noneFirstHeart.style.display = 'flex'}, 2000);
        
    } else if(healt == 0){
        alert('you lose');
        location.reload();
    }
}

//почати знову при виграші
winButton.onclick = function(){
    location.reload();
}

// робимо меню
let isOpen = false;
menuBtn.onclick = function () {
    if (isOpen == false) {
        menu.style.right = 0;
        isOpen = true;
        pause.style.display = 'none';
        play.style.display = 'flex';
    } else {
        pause.style.display = 'flex';
        play.style.display = 'none';
        menu.style.right = '-400px';
        isOpen = false;
    }
}

// робимо кнопки для збільшення або зменшення складності гри
buttonHardZero.onclick = function(){
    buttonHardZero.style.backgroundColor = '#3953ff';
    buttonHardZero.style.marginBottom = 2 + '%';

    buttonHardOne.style.backgroundColor = 'black';
    buttonHardOne.style.marginBottom = 0 + '%';

    buttonHardTwo.style.backgroundColor = 'black';
    buttonHardTwo.style.marginBottom = 0 + '%';

    buttonHardThree.style.backgroundColor = 'black';
    buttonHardThree.style.marginBottom = 0 + '%';

    falseTargetOne.style.display = 'none';
    falseTargetTwo.style.display = 'none';
    falseTargetThree.style.display = 'none';
}
buttonHardOne.onclick = function(){
    buttonHardZero.style.backgroundColor = 'black';
    buttonHardZero.style.marginBottom = 0 + '%';

    buttonHardOne.style.backgroundColor = '#3953ff';
    buttonHardOne.style.marginBottom = 2 + '%';

    buttonHardTwo.style.backgroundColor = 'black';
    buttonHardTwo.style.marginBottom = 0 + '%';

    buttonHardThree.style.backgroundColor = 'black';
    buttonHardThree.style.marginBottom = 0 + '%';

    falseTargetOne.style.display = 'flex';
    falseTargetTwo.style.display = 'none';
    falseTargetThree.style.display = 'none';
}
buttonHardTwo.onclick = function(){
    buttonHardZero.style.backgroundColor = 'black';
    buttonHardZero.style.marginBottom = 0 + '%';

    buttonHardOne.style.backgroundColor = 'black';
    buttonHardOne.style.marginBottom = 0 + '%';

    buttonHardTwo.style.backgroundColor = '#3953ff';
    buttonHardTwo.style.marginBottom = 2 + '%';

    buttonHardThree.style.backgroundColor = 'black';
    buttonHardThree.style.marginBottom = 0 + '%';

    falseTargetOne.style.display = 'flex';
    falseTargetTwo.style.display = 'flex';
    falseTargetThree.style.display = 'none';
}
buttonHardThree.onclick = function(){
    buttonHardZero.style.backgroundColor = 'black';
    buttonHardZero.style.marginBottom = 0 + '%';

    buttonHardOne.style.backgroundColor = 'black';
    buttonHardOne.style.marginBottom = 0 + '%';

    buttonHardTwo.style.backgroundColor = 'black';
    buttonHardTwo.style.marginBottom = 0 + '%';

    buttonHardThree.style.backgroundColor = '#3953ff';
    buttonHardThree.style.marginBottom = 2 + '%';

    falseTargetOne.style.display = 'flex';
    falseTargetTwo.style.display = 'flex';
    falseTargetThree.style.display = 'flex';
}

// чорна й біла тема

switchParent.onclick = function(){
    let whiteColor = 'rgb(194, 194, 194)';
    let greyColor = 'rgb(34, 34, 34)';
    if(switchChange == 0){
        switchBox.style.marginLeft = 64 + '%';

        wrap.style.backgroundColor = greyColor;
        target.style.border = '10px double rgb(34, 34, 34)';
        target.style.color = whiteColor;
        falseTargetOne.style.color = whiteColor;
        falseTargetTwo.style.color = whiteColor;
        falseTargetThree.style.color = whiteColor;
        comment.style.color = whiteColor;
        falseTargetOne.style.border = '10px double rgb(34, 34, 34)';
        falseTargetTwo.style.border = '10px double rgb(34, 34, 34)';
        falseTargetThree.style.border = '10px double rgb(34, 34, 34)';

        firstHeart.style.color = whiteColor;
        noneFirstHeart.style.color = whiteColor;
        secondHeart.style.color = whiteColor;
        noneSecondHeart.style.color = whiteColor;
        thirtHeart.style.color = whiteColor;
        noneThirtHeart.style.color = whiteColor;
        
        switchChange++;
    } else if(switchChange == 1){
        switchBox.style.marginLeft = 2 +'%'

        wrap.style.backgroundColor = 'white';
        target.style.border = '10px double #fff';
        target.style.color = 'white';
        falseTargetOne.style.color = 'white';
        falseTargetTwo.style.color = 'white';
        falseTargetThree.style.color = 'white';
        comment.style.color = 'black';
        falseTargetOne.style.border = '10px double #fff';
        falseTargetTwo.style.border = '10px double #fff';
        falseTargetThree.style.border = '10px double #fff';

        firstHeart.style.color = '#141414';
        noneFirstHeart.style.color = '#141414';
        secondHeart.style.color = '#141414';
        noneSecondHeart.style.color = '#141414';
        thirtHeart.style.color = '#141414';
        noneThirtHeart.style.color = '#141414';

        switchChange--;
    }
}

quitBlock.onclick = function(){
    window.location.href = 'https://github.com/wrouruy/dotReaction';
}