window.onload = function(){
  const modal = document.getElementById("modal");
  const modal_bg = document.getElementById("modal_bg");
  const btnModals = document.getElementsByClassName("check_btn");

  // 모달창 띄우기
  for(var i = 0; i<btnModals.length; i++){
    btnModals[i].addEventListener("click", e => {
      modal.style.display = "flex";
      modal_bg.style.display = "block";
    });
  }

  // 모달창 이외의 영역을 클릭 시 종료
  modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal_area")) {
        modal.style.display = "none"
        modal_bg.style.display = "none";
    }
})

};
