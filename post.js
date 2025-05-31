document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("username").textContent = user?.name || "Guest";

  populateStates("fromState", "fromCity");
  populateStates("toState", "toCity");

  const sameCheckbox = document.getElementById("sameLocation");
  const toLocation = document.getElementById("toLocation");
  sameCheckbox.addEventListener("change", () => {
    toLocation.style.display = sameCheckbox.checked ? "none" : "block";
  });

  document.getElementById("submitPost").addEventListener("click", () => {
    const fromState = document.getElementById("fromState").value;
    const fromCity = document.getElementById("fromCity").value;
    const toSame = document.getElementById("sameLocation").checked;
    const toState = toSame ? fromState : document.getElementById("toState").value;
    const toCity = toSame ? fromCity : document.getElementById("toCity").value;
    const landmark = document.getElementById("landmark").value.trim();
    const extra = document.getElementById("extra").value.trim();

    if (!landmark) {
      alert("Please enter a landmark or description.");
      return;
    }

    const post = {
      fromState, fromCity, toState, toCity, landmark, extra,
      timestamp: new Date().toISOString()
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "feed.html";
  });
});