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

document.addEventListener('DOMContentLoaded', (event) => {
  const items = document.querySelectorAll('.category a');
  const views = document.querySelectorAll('.view > div');

  items.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
          views.forEach((view, viewIndex) => {
              if (index === viewIndex) {
                  view.style.display = 'block';
              } else {
                  view.style.display = 'none';
              }
          });
      });

document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          navLinks.forEach((navLink) => navLink.classList.remove('active'));
          link.classList.add('active');
      });
  });
});

  item.addEventListener('click', (event) => {
      event.preventDefault();
      views.forEach((view, viewIndex) => {
          if (index === viewIndex) {
              view.style.display = 'block';
          } else {
              view.style.display = 'none';
          }
          });
      });
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
