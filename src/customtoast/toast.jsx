// function to create a toast function in which we pass the message we want to show
const toast = (message) => {
  const toastnode = document.querySelector(".toastify-popup");
  toastnode.innerHTML = message;
  toastnode.classList.add("show-toast");
  setTimeout(() => {
    toastnode.classList.remove("show-toast");
  }, 3000);
};

export default toast;
