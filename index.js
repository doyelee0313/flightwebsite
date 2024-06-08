// 모달 열기와 닫기
const modal = document.getElementById("searchModal");
const btn = document.querySelector(".searchbar-button");
const span = document.querySelector(".close");

// 모달 열기
btn.onclick = function () {
  modal.style.display = "block";
};

// 모달 닫기
span.onclick = function () {
  modal.style.display = "none";
};

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
