function change(color) {
    // document.body.style.background=color;
    document.getElementById("modify").style.background=color;
}

$(function() {
    $('#modify').click(function() {
        var printPASS = $('.pw').val();
        var printPASSCK = $('.pwck').val();

    if(printPASS != printPASSCK) {
          alert('비밀번호가 일치하지 않습니다.')
        }else {
            alert('변경 완료');
        }
    });
  });