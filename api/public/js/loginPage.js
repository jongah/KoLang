$(function() {
  $('.login').click(function() {
      var printID = $('.id').val();
      var printPASS = $('.pass').val();
      if (printID == '' || printPASS == '') {
          alert('입력되지 않은 항목이 있습니다.');
      }else {
          alert('ID : ' + printID + '\nPASS : ' + printPASS);
      }
  });
});