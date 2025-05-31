document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      if (name) {
        localStorage.setItem("username", name);
        alert("Welcome, " + name + "!");
        window.location.href = "post.html";
      }
    });
  }
});