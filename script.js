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

function initMap() {
  // 구글 지도
  const mapOptions = {
    center: new google.maps.LatLng(51.508742, -0.12085), // 위도랑 경도
    zoom: 3,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
