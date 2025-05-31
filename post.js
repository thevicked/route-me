
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("greeting").textContent = `Hi, ${username}`;

  populateStates("from-state", "from-city");
  populateStates("to-state", "to-city");

  const postBtn = document.getElementById("post-btn");
  const fromText = document.getElementById("from-text");
  const toText = document.getElementById("to-text");
  const infoText = document.getElementById("info-text");
  const feed = document.getElementById("feed");

  postBtn.addEventListener("click", () => {
    const fromState = document.getElementById("from-state").value;
    const fromCity = document.getElementById("from-city").value;
    const toState = document.getElementById("to-state").value;
    const toCity = document.getElementById("to-city").value;

    const post = document.createElement("div");
    post.innerHTML = `
      <strong>${username}</strong>:
      From <em>${fromCity}, ${fromState}</em>
      to <em>${toCity}, ${toState}</em><br/>
      Landmark: ${fromText.value} → ${toText.value}<br/>
      <small>${infoText.value}</small>
    `;
    feed.prepend(post);

    fromText.value = "";
    toText.value = "";
    infoText.value = "";
  });
});
