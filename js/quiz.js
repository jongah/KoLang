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
    document.querySelector('.modal_close').addEventListener('click', offClick);              
};

function createDiv() {
    // 1. <div> element 만들기
    const newDiv = document.createElement('div');
    
    // 2. <div>에 들어갈 text node 만들기
    const newText = document.createTextNode('TEST');
    
    // 3. <div>에 text node 붙이기
    newDiv.appendChild(newText);
    
    // 4. <body>에 1에서 만든 <div> element 붙이기
    document.getElementById('sideBar').appendChild(newDiv);
} 

$(function() {
    $("#btn2").click(function() {
        $("#btn2").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn3").click(function() {
        $("#btn3").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn4").click(function() {
        $("#btn4").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn5").click(function() {
        $("#btn5").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn6").click(function() {
        $("#btn6").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn7").click(function() {
        $("#btn7").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn8").click(function() {
        $("#btn8").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn9").click(function() {
        $("#btn9").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn10").click(function() {
        $("#btn10").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn2").click(function() {
        $("#btn2").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn3").click(function() {
        $("#btn3").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn4").click(function() {
        $("#btn4").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn5").click(function() {
        $("#btn5").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn6").click(function() {
        $("#btn6").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn7").click(function() {
        $("#btn7").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn8").click(function() {
        $("#btn8").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn9").click(function() {
        $("#btn9").prependTo('#answerBox');
    });
});

$(function() {
    $("#btn10").click(function() {
        $("#btn10").prependTo('#answerBox');
    });
});