
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".btn");

  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const username = localStorage.getItem("username");
      if (username) {
        window.location.href = "post.html";
      } else {
        window.location.href = "signup.html";
      }
    });
  }

  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value.trim();
      if (name) {
        localStorage.setItem("username", name);
        window.location.href = "post.html";
      }
    });
  }
});
