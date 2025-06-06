document.getElementById("startPosting")?.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.name) {
    window.location.href = "post.html";
  } else {
    window.location.href = "signup.html";
  }
});

document.getElementById("signupBtn")?.addEventListener("click", () => {
  
const surname = document.getElementById("surname").value.trim();
const otherNames = document.getElementById("otherNames").value.trim();
const name = `${otherNames} ${surname}`;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || password.length < 8) {
    alert("All fields required. Password must be at least 8 characters.");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));
  window.location.href = "post.html";
});