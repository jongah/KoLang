$(function() {
  $('.signup').click(function() {
      var printNAME = $('.name').val();
      var printID = $('.id').val();
      var printPASS = $('.pass').val();
      var printPASSCK = $('.pass_check').val();
      var printEMAIL = $('.email').val();

      if (printNAME == '' || printID == '' || printPASS == '' || printPASSCK == '' || printEMAIL == '') {
          alert('입력되지 않은 항목이 있습니다.');
      }else if(printPASS != printPASSCK) {
        alert('비밀번호가 일치하지 않습니다.')
      }else {
          alert('\nname : ' + printNAME + '\nID : ' + printID + '\nPASS : ' + printPASS + '\nPASS CHECK : ' + printPASSCK + '\nemail : ' + printEMAIL);
      }
  });
});