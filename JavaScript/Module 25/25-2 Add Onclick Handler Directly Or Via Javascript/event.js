function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const blueBtn = document.getElementById('click_btn');
blueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}