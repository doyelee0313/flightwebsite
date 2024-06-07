const separators1 = document.querySelector(".separator1");
const separators2 = document.querySelector(".separator2");
const separators3 = document.querySelector(".separator3");
const guestContainer = document.querySelector(".guest_container");
const checkInContainer = document.querySelector(".checkIn_container");
const checkOutContainer = document.querySelector(".checkOut_container");

// checkInContainer
checkInContainer.addEventListener("mouseover", () => {
  separators1.classList.add("hidden");
  separators2.classList.add("hidden");
});

checkInContainer.addEventListener("mouseout", () => {
  separators1.classList.remove("hidden");
  separators2.classList.remove("hidden");
});

// checkOutContainer
checkOutContainer.addEventListener("mouseover", () => {
  separators2.classList.add("hidden");
  separators3.classList.add("hidden");
});

checkOutContainer.addEventListener("mouseout", () => {
  separators2.classList.remove("hidden");
  separators3.classList.remove("hidden");
});

// guestContainer
guestContainer.addEventListener("mouseover", () => {
  separators3.classList.add("hidden");
});

guestContainer.addEventListener("mouseout", () => {
  separators3.classList.remove("hidden");
});

// Modal design function

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav_btn");
  const worldButton = document.querySelector(".nav_btn:first-child");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 현재 클릭된 버튼이 '전 세계' 버튼인지 확인합니다.
      const isWorldButton = this === worldButton;

      // 모든 버튼에 있는 active 클래스를 제거합니다.
      navButtons.forEach((btn) => btn.classList.remove("active"));

      // 만약 클릭된 버튼이 '전 세계' 버튼이 아니라면
      // '전 세계' 버튼에 있는 active 클래스를 제거합니다.
      if (!isWorldButton) {
        worldButton.classList.remove("active");
      }

      // 클릭된 버튼에 active 클래스를 추가합니다.
      this.classList.add("active");
    });
  });
});

// click modal open function
const searchBar = document.getElementById("searchForm");
const modal = document.getElementById("modal");

// 모달의 현재 상태를 저장하는 변수
let isModalVisible = false;

// searchBar를 클릭할 때마다 모달의 표시/숨김을 토글합니다.
searchBar.addEventListener("click", () => {
  // 현재 모달의 상태에 따라 표시/숨김을 토글합니다.
  if (isModalVisible) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }

  // 모달의 상태를 반전시킵니다.
  isModalVisible = !isModalVisible;
});
