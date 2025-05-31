
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("greeting").textContent = `Hi, ${username}`;

  populateStates("from-state", "from-city");
  populateStates("to-state", "to-city");

  const postBtn = document.getElementById("post-btn");
  const sameLocation = document.getElementById("same-location");
  const toSection = document.getElementById("to-section");

  sameLocation.addEventListener("change", () => {
    toSection.style.display = sameLocation.checked ? "none" : "block";
  });

  postBtn.addEventListener("click", () => {
    const fromState = document.getElementById("from-state").value;
    const fromCity = document.getElementById("from-city").value;
    const toState = sameLocation.checked ? fromState : document.getElementById("to-state").value;
    const toCity = sameLocation.checked ? fromCity : document.getElementById("to-city").value;
    const fromText = document.getElementById("from-text").value;
    const toText = document.getElementById("to-text").value;
    const infoText = document.getElementById("info-text").value;

    const postObj = {
      username,
      from: { state: fromState, city: fromCity, text: fromText },
      to: { state: toState, city: toCity, text: toText },
      info: infoText,
      timestamp: Date.now()
    };

    // Get existing posts or initialize
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.unshift(postObj);
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "feed.html";
  });
});
