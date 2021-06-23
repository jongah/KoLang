// 문단 변수 : let paragraph; // txt 파일 불러오기
// 문장 변수 : let sentence; // txt 파일을 .으로 구분해서 가져오기
// 특수문자 제거 문장 : reSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");
// 단어 변수 : let word = newSentence.split(' ');

let paragraph = "계절이 지나가는 하늘에는 가을로 가득 차 있습니다.나는 아무 걱정도 없이 가을 별들을 다 헬 듯합니다.가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한마디씩 불러 봅니다.소학교 때 책상을 같이 했던 아이들의 이름과, 패, 경, 옥, 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, '프랑시스 잠', '라이너 마리아 릴케' 이런 시인의 이름을 불러 봅니다.이네들은 너무나 멀리 있습니다.별이 아스라이 멀듯이.어머님, 그리고 당신은 멀리 북간도에 계십니다.나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써 보고 흙으로 덮어 버리었습니다.딴은 밤을 새워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.그러나 겨울이 지나고 나의 별에도 봄이 오면 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다";

// 테스트 문장
let arr = new Array(2);

let sentence = paragraph.split('.');
let reSentnece;

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
    // document.querySelector('.modal_wrap').addEventListener('click', offClick);
    // end modal

    // 여기서부터 게임 로직
    for(i = 0; i < sentence.length; i++) {
       word = sentence[i].split(' '); // 공백을 기준으로 split

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