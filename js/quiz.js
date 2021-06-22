// 문단을 담을 변수 : let paragraph = "";
let sentence = "프랑시스 속의 계절이 소녀들의 까닭입니다.";
let newSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");

let word = newSentence.split(' ');

// side menu
let answer = new Array();

window.onload = function() {
    // modal
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
    let s ="";
    // create
    for(i = 0; i < word.length; i++) {
        let create = document.createElement('button');
        create.innerHTML = word[i];
        document.getElementById('wordBox').appendChild(create);

        create.addEventListener('click', function onclick() {
            if(create.parentNode.id == 'wordBox') {
                document.getElementById('answerBox').appendChild(create);
                answer = answer.concat(create.textContent);
                //test += create.textContent);
                //s += create.textContent + " ";
                //console.log(answer.join(" "));
            }else if(create.parentNode.id == 'answerBox') {
                //test = test.splice(word.indexOf(create.textContent));
                answer.splice(answer.indexOf(create.textContent), 1);
                console.log(answer);
                document.getElementById('wordBox').appendChild(create);
            }else {
                console.log('어딘가 오류 발생 ㅜㅜ');
            }
        });
    }
}

function knowWordCreate() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('next');
    newDiv.appendChild(newText);

    let reSentence = answer.join(" ");
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