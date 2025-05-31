document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created! (This is a placeholder)");
      window.location.href = "post.html";
    });
  }
});