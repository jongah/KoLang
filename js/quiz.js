// 문단 변수 : let paragraph; // txt 파일 불러오기
// 문장 변수 : let sentence; // txt 파일을 .으로 구분해서 가져오기
// 특수문자 제거 문장 : reSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");
// 단어 변수 : let word = newSentence.split(' ');

let sentence = "붉은 해가 세수하던 파란 바다 검게 물들고";
let newSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");

let word = newSentence.split(' ');

// side menu
let answer = new Array();

// 여기에 새로운 문장 받아서 새로운 단어 퀴즈 만들기 함수
function newQuizQuestion() {

}

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

    // create
    for(i = 0; i < word.length; i++) {
        let create = document.createElement('button');
        create.innerHTML = word[i];
        document.getElementById('wordBox').appendChild(create);

        create.addEventListener('click', function onclick() {
            if(create.parentNode.id == 'wordBox') {
                document.getElementById('answerBox').appendChild(create);
                answer = answer.concat(create.textContent);

            }else if(create.parentNode.id == 'answerBox') {
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

    // 함수호출
}

function unknowWordCreate() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('skip');
    newDiv.appendChild(newText);
    newDiv.style.background="#fa6b0b";
    document.getElementById('sideBar').appendChild(newDiv);

    // 함수호출
}