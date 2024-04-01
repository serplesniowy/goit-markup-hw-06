document.querySelector("#hambtn").addEventListener("click", () => {
  document.querySelector("#mobilemenu").classList.add("is-open");
});

document.querySelector("#mobilebtn").addEventListener("click", () => {
  document.querySelector("#mobilemenu").classList.remove("is-open");
});

document.querySelector("#srvcbtn").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("is-open");
});

document.querySelector("#closebtn").addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("is-open");
});

/* 


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


*/