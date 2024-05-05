const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),

  openMobileMenuBtn: document.querySelector(".menu-button"),
  closeMobileMenuBtn: document.querySelector(".mobile-menu__btn-close"),

  mobileMenu: document.querySelector(".mobile-menu"),

  noscroll: document.querySelector(".noscroll"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
  console.log("Это клик в бэкдроп");
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle("is-hidden");
  document.body.classList.toggle("noscroll");
}
