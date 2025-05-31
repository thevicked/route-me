document.getElementById("startPosting")?.addEventListener("click", () => {
  const user = localStorage.getItem("user");
  if (user) {
    window.location.href = "post.html";
  } else {
    window.location.href = "signup.html";
  }
});

document.getElementById("signupBtn")?.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || password.length < 8) {
    alert("All fields required. Password must be at least 8 characters.");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));
  window.location.href = "post.html";
});