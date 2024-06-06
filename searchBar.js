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
