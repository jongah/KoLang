// 문단 변수 : let paragraph; // txt 파일 불러오기
// 문장 변수 : let sentence; // txt 파일을 .으로 구분해서 가져오기
// 특수문자 제거 문장 : reSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");
// 단어 변수 : let word = newSentence.split(' ');


// 테스트 문장
let arr = new Array(2);

let sentence = "붉은 해가 세수하던 파란 바다 검게 물들고";
let sentence2 = "전해주고 싶어 슬픈 시간이다 흩어진 후에야 들리지만";
arr[0] = sentence;
arr[1] = sentence2;
let newSentence;
let word;

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
    document.querySelector('.modal_wrap').addEventListener('click', offClick);
    // end modal

    // 여기서부터 게임 로직
    for(i = 0; i < arr.length; i++) {
        newSentence = arr[i].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,""); // 특수문자 제거
        word = newSentence.split(' '); // 공백을 기준으로 split

        for(i = 0; i < word.length; i++) { // 위에 변수 word의 길이 만큼 wordBox(단어 container)에 button이 생성됨
            let create = document.createElement('button'); // button 생성
            create.innerHTML = word[i]; // button에 word, 단어를 getText
            document.getElementById('wordBox').appendChild(create); // wordBox에 자식요소로  button 생성

            create.addEventListener('click', function onclick() { // 버튼을 눌렀을 때 일어나는 클릭 이벤트
                if(create.parentNode.id == 'wordBox') { // 만약 button의 부모 element가 wordBox라면 
                    document.getElementById('answerBox').appendChild(create); // 버튼을 answer의 자식 element로 보냄
                    answer = answer.concat(create.textContent); // 그리고 버튼의 text를 answer에 담기

                }else if(create.parentNode.id == 'answerBox') { // 만약 button의 부모 element가 answerBox라면
                    answer.splice(answer.indexOf(create.textContent), 1); // 클릭한 버튼의 index를 제거 (그냥 클릭한 버튼은 문장에서 제외)
                    console.log(answer);
                    document.getElementById('wordBox').appendChild(create); // 클릭하면 다시 wordBox의 자식 button으로 보내버림
                }else {
                    console.log('어딘가 오류 발생 ㅜㅜ');
                }
            });
        }
    }

    console.log('end')
    // create
    
}

// next버튼 테스트
function knowWordCreate() {
    const newDiv = document.createElement('div'); // div 만들기
    const newText = document.createTextNode('next'); // div의 text는 next
    newDiv.appendChild(newText); // text를 div에 삽입

    let reSentence = answer.join(" "); // 아까 answerBox에 있단 단어를 join으로 묶어준다
    console.log(reSentence);

    if(newSentence == reSentence) { // 원본 문장이랑 위에 합친 문장이랑 같으면
        newDiv.style.background="#64c647"; // 색을 초록색으로 
        console.log('o');
    }else {
        newDiv.style.background="#fa6b0b"; // 다르면
        console.log('x'); // 색을 주황색으로
    }

    // 여기 아까 answerBox에 있는 거 없애고 다음 단어 출력하기 테스트
    document.getElementById('answerBox').removeChild(answerBox);
    console.log('성공');
    document.getElementById('sideBar').appendChild(newDiv); // sideBar에 삽입

    // 함수호출
}

// skip
function unknowWordCreate() {
    const newDiv = document.createElement('div'); // 위랑 같음
    const newText = document.createTextNode('skip'); // 위랑 같음
    newDiv.appendChild(newText); // 위랑 같음
    newDiv.style.background="#fa6b0b"; // 이건 색을 무조건 주황색으로
    document.getElementById('sideBar').appendChild(newDiv); // sideBar에 삽입

    // 함수호출
}