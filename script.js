/* mobile and tablet - modal menu */
const modalMenu = document.getElementById("m-t-modal-menu");
const viewBlure = document.getElementById("bk-mode-blure");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("closebtn");

window.onresize = function (event) {
  // 브라우저 사이즈에 반응하는 스타일 조정
  const innerWidth = window.innerWidth;
  if (innerWidth >= "992") {
    modalMenu.style.visibility = "hidden";
    viewBlure.classList.remove("is-active", "bk-layer");
  }
};
const modalOpenBtn = () => {
  viewBlure.classList.add("is-active", "bk-layer");
  modalMenu.style.visibility = "visible";
  modalMenu.style.opacity = 1;
  modalMenu.style.transition = "all 0.8s";
};

const modalCloseBtn = (e) => {
  const modalMenu = document.getElementById("m-t-modal-menu");
  viewBlure.classList.remove("is-active", "bk-layer");
  modalMenu.style.visibility = "hidden";
  modalMenu.style.opacity = 0;
  modalMenu.style.transition = "all 0.8s";
};

openBtn.addEventListener("click", modalOpenBtn);
closeBtn.addEventListener("click", modalCloseBtn);

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

/* 탭메뉴 마우스 클릭 ~ 오버 하면 발생하는 이벤트 */

document.addEventListener("DOMContentLoaded", (event) => {
  const items = document.querySelectorAll(".category a");
  const views = document.querySelectorAll(".view > div");

  items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      views.forEach((view, viewIndex) => {
        if (index === viewIndex) {
          view.style.display = "block";
        } else {
          view.style.display = "none";
        }
      });
    });

    document.addEventListener("DOMContentLoaded", (event) => {
      const navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          link.classList.add("active");
        });
      });
    });

    item.addEventListener("click", (event) => {
      event.preventDefault();
      views.forEach((view, viewIndex) => {
        if (index === viewIndex) {
          view.style.display = "block";
        } else {
          view.style.display = "none";
        }
      });
    });
  });
});

/* 구글 지도 생성 */


window.initMap = function () {
  //구글에서 지원하는 Map클래스의 인스턴스(지도)를 만들어 map에 할당함
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5400456, lng: 126.9921017 },
    zoom: 2.15,
    gestureHandling: "greedy",
  });

  const choiceBtn = document.querySelectorAll(".img-btn");
  // 동일 데이터 접근을 다루기에는 클래스가 좋아서 클래스명으로 세팅할게요
  // 어떤 이미지 버튼인지 그 버튼에 대한 데이터(요소)를 가져와 노드리스트에 저장
  console.log(choiceBtn);

  choiceBtn.forEach((btn) => {
    const lat = btn.dataset.lat;
    console.log(lat);
    const lng = btn.dataset.lng;
    const label = btn.dataset.label;
    // const zoom = btn.dataset.zoom;
    /* 이미지(여행지)를 클릭하면, 그 나라에 대한 위치 정보값을 가져와 그 위치로 마커를 표시 */
    btn.addEventListener("click", () => {
      const mapMarker = new google.maps.Marker({
        position: { lat: Number(lat), lng: Number(lng) },
        label: `${label}`,
        // zoom: `${zoom}`, 확대기능은 아직 구현 안해서 zoom값은 삭제 비활성화함
        map: map,
      });
      /* 마커를 클릭하면, 그에 대한 포지션으로 이동 및 확대 */
      mapMarker.addListener("click", () => {
        map.setCenter(mapMarker.position);
        map.setZoom(10);
      });
    });
  });
};

function initMap() {
  // 구글 지도
  const mapOptions = {
    center: new google.maps.LatLng(51.508742, -0.12085), // 위도랑 경도
    zoom: 3,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function moveCamera(lat, lng) {
  const position = { lat: lat, lng: lng };
  map.setCenter(position);
  map.setZoom(10); // Adjust zoom level if needed
}

/* 여행 추천 배너 화면조정 */
document.addEventListener('DOMContentLoaded', function () {
// Array of swiper configurations
const swiperConfigs = [
  { container: '.view01', initialSlides: 1, spaceBetween: 10 },
  { container: '.view02', initialSlides: 1, spaceBetween: 10 },
  { container: '.view03', initialSlides: 1, spaceBetween: 10 },
  { container: '.view04', initialSlides: 1, spaceBetween: 10 },
  { container: '.view05', initialSlides: 1, spaceBetween: 10 }
];

// Loop through swiperConfigs to initialize Swiper instances
swiperConfigs.forEach((config, index) => {
  const swiper = new Swiper(config.container, {
    slidesPerView: config.initialSlides,
    spaceBetween: config.spaceBetween,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
    }
  });
});

});

