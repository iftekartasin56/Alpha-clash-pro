function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const blueBtn = document.getElementById('make_blue');
blueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


const purpleBtn = document.getElementById('make_purple');
purpleBtn.onclick = function(){
    document.body.style.backgroundColor = 'purple';
}


// option 4

const pinkBtn = document.getElementById('make_pink');

pinkBtn.addEventListener('click', makePink);


function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const greenBtn = document.getElementById('make_green');
greenBtn.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option 4 final
;
document.getElementById('make_goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});


