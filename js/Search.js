window.onload = function(){

  // eng
  let btn = document.querySelector('.search_btn');
  btn.addEventListener('click',click);
  function click(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/eng/dicSearch/search?nation=eng&nationCode=6&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }

  // russ
  let rbtn = document.querySelector('.russ_search');
  rbtn.addEventListener('click',clickRu);
  function clickRu(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/rus/dicSearch/search?nation=rus&nationCode=5&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }

  // french
  let fbtn = document.querySelector('.french_search');
  fbtn.addEventListener('click',clickFr);
  function clickFr(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/fra/dicSearch/search?nation=fra&nationCode=8&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }

  // japanese
  let jbtn = document.querySelector('.japanese_search');
  jbtn.addEventListener('click',clickJa);
  function clickJa(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/jpn/dicSearch/search?nation=jpn&nationCode=7&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }

  // thai
  let tbtn = document.querySelector('.thai_search');
  rbtn.addEventListener('click',clickTh);
  function clickTh(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/tha/dicSearch/search?nation=tha&nationCode=3&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }

  // vietnam
  let vibtn = document.querySelector('.vietnamese_search');
  vibtn.addEventListener('click',clickVi);
  function clickVi(){
    let search_word = document.querySelector('.search_word');
    // console.log(search_word.value);
    var url = 'https://krdict.korean.go.kr/vie/dicSearch/search?nation=vie&nationCode=2&ParaWordNo=&mainSearchWord=' + search_word.value;
    // console.log(url);
    window.open(url);
  }
    
}