window.onload = function(){
  const modal = document.getElementById("modal");
  const modal_bg = document.getElementById("modal_bg");
  const btnModals = document.getElementsByClassName("check_btn");
  const divModals = document.getElementsByClassName("score_box");

  // 모달창 띄우기
  for(var i = 0; i<btnModals.length; i++){
    btnModals[i].addEventListener("click", e => {
      modal.style.display = "flex";
      modal_bg.style.display = "block";
    });
  }
<<<<<<< HEAD
              
  document.getElementById('.check_scorebtn').addEventListener('click', onClick);
  document.querySelector('.close_btn').addEventListener('click', offClick);              
};

function changeImg() {
  let imgInput = document.getElementById('profileImg');
}
=======

  for(var i = 0; i<divModals.length; i++){
    divModals[i].addEventListener("click", e => {
      modal.style.display = "flex";
      modal_bg.style.display = "block";
    });
  }

  // X창 클릭시 모달창 close
  const closeBtn = modal.querySelector(".close_btn")
  closeBtn.addEventListener("click", e => {
    modal.style.display = "none";
    modal_bg.style.display = "none";
  });

  window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none";
        modal_bg.style.display = "none";
    }
  });

};
>>>>>>> db8928b6bfefbda43828bd6966fb2f3a498f5f1e
