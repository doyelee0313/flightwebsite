/* sign-in,up : (mouseover ~ mouseout) - event  */

const btn = [
  { className: ".member", id: "login" },
  { className: ".member", id: "resis" },
];

btn.forEach((button) => {
  const currentBtn = document.getElementById(button.id);
  //   console.log(currentBtn);
  currentBtn.addEventListener("mouseover", () => {
    if (currentBtn.innerText == "sign in") {
      currentBtn.innerText = "로그인";
    } else if (currentBtn.innerText == "sign up") {
      currentBtn.innerText = "회원가입";
    }
  });
  currentBtn.addEventListener("mouseout", () => {
    if (currentBtn.innerText == "로그인") {
      currentBtn.innerText = "sign in";
    } else if (currentBtn.innerText == "회원가입") {
      currentBtn.innerText = "sign up";
    }
  });
});

/* 구글 지도 생성 */
window.initMap = function () {
  //구글에서 지원하는 Map클래스의 인스턴스(지도)를 만들어 map에 할당함
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.625327, lng: 134.5692373 },
    zoom: 3.15,
  });

  new google.maps.Marker({
    //지도 마크업
    position: { lat: 51.528607, lng: -0.4312394 },
    label: "런던",
    map: map,
  });
};
