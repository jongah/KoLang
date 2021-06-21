window.onload = function() {
  function onClick() {
      document.querySelector('.modal').style.display ='block';
      document.querySelector('.modal_bg').style.display ='block';
  }   
  function offClick() {
      document.querySelector('.modal').style.display ='none';
      document.querySelector('.modal_bg').style.display ='none';
  }
              
  document.getElementById('.check_scorebtn').addEventListener('click', onClick);
  document.querySelector('.close_btn').addEventListener('click', offClick);              
};

function changeImg() {
  let imgInput = document.getElementById('profileImg');
}