
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
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!name || !email || password.length < 8) {
        alert("Please fill all fields correctly (password must be at least 8 characters)");
        return;
      }

      localStorage.setItem("username", name);
      window.location.href = "post.html";
    });
  }
});
