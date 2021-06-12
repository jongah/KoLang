window.onload = function() {
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
                
    document.getElementById('exit').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);              
};

$(function() {
    $("#btn1").click(function() {
        $("#btn1").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn2").click(function() {
        $("#btn2").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn3").click(function() {
        $("#btn3").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn4").click(function() {
        $("#btn4").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn5").click(function() {
        $("#btn5").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn6").click(function() {
        $("#btn6").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn7").click(function() {
        $("#btn7").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn8").click(function() {
        $("#btn8").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn9").click(function() {
        $("#btn9").appendTo('#answerBox');
    });
});

$(function() {
    $("#btn10").click(function() {
        $("#btn10").appendTo('#answerBox');
    });
});