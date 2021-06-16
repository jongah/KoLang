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

function knowWordCreate() {
    // 1. <div> element 만들기
    const newDiv = document.createElement('div');
    
    // 2. <div>에 들어갈 text node 만들기
    const newText = document.createTextNode('next');
    
    // 3. <div>에 text node 붙이기
    newDiv.appendChild(newText);
    newDiv.style.background="#fa6b0b";

    // 4. <body>에 1에서 만든 <div> element 붙이기
    document.getElementById('sideBar').appendChild(newDiv);
}

function unknowWordCreate() {
    // 1. <div> element 만들기
    const newDiv = document.createElement('div');
    
    // 2. <div>에 들어갈 text node 만들기
    const newText = document.createTextNode('skip');
    
    // 3. <div>에 text node 붙이기
    newDiv.appendChild(newText);
    newDiv.style.background="#fa6b0b";

    // 4. <body>에 1에서 만든 <div> element 붙이기
    document.getElementById('sideBar').appendChild(newDiv);
}