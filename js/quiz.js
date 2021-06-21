// modal
window.onload = function() {
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
                
    document.getElementById('endBtn').addEventListener('click', onClick);
    document.querySelector('.black_bg').addEventListener('click', offClick);              
};

let sentence = "프랑시스 속의 계절이 소녀들의 까닭입니다.";
let newSentence = sentence.replace(".","");

let word = newSentence.split(' ');

// side menu
function knowWordCreate() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('next');
    newDiv.appendChild(newText);

    let reSentence = word.join(" ");
    console.log(reSentence);

    if(newSentence == reSentence) {
        newDiv.style.background="#64c647";
        console.log('o');
    }else {
        newDiv.style.background="#fa6b0b";
        console.log('x');
    }

    document.getElementById('sideBar').appendChild(newDiv);
}

function unknowWordCreate() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('skip');
    newDiv.appendChild(newText);
    newDiv.style.background="#fa6b0b";
    document.getElementById('sideBar').appendChild(newDiv);
}

// create quiz button
window.onload = function quizTest() {
    for(i = 0; i < word.length; i++) {
        let create = document.createElement('button');
        create.innerHTML = word[i];
        document.getElementById('wordBox').appendChild(create);
    }
}