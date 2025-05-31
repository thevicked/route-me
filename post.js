
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

  const fromText = document.getElementById("from-text");
  const toText = document.getElementById("to-text");
  const infoText = document.getElementById("info-text");
  const feed = document.getElementById("feed");

  const fromStateSel = document.getElementById("from-state");
  const fromCitySel = document.getElementById("from-city");
  const toStateSel = document.getElementById("to-state");
  const toCitySel = document.getElementById("to-city");

  function createPostHtml(user, from, to, landmark, info) {
    return `
      <div class="post">
        <strong>${user}</strong>:<br/>
        From <em>${from}</em> to <em>${to}</em><br/>
        Landmark: ${landmark}<br/>
        <small>${info}</small>
        <div class="route-box">
          <input type="text" placeholder="Suggest a route..." class="route-input"/>
          <button class="route-btn">Route</button>
        </div>
        <div class="comments"></div>
      </div>
    `;
  }

  function addRouteListeners() {
    document.querySelectorAll(".route-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const input = btn.previousElementSibling;
        const commentBox = btn.parentElement.nextElementSibling;
        if (input.value.trim()) {
          const comment = document.createElement("div");
          comment.textContent = `→ ${input.value.trim()}`;
          commentBox.appendChild(comment);
          input.value = "";
        }
      });
    });
  }

  postBtn.addEventListener("click", () => {
    const from = `${fromCitySel.value}, ${fromStateSel.value}`;
    const to = sameLocation.checked ? from : `${toCitySel.value}, ${toStateSel.value}`;
    const landmark = `${fromText.value} → ${toText.value}`;
    const info = infoText.value;

    const post = document.createElement("div");
    post.innerHTML = createPostHtml(username, from, to, landmark, info);
    feed.prepend(post);
    addRouteListeners();

    fromText.value = "";
    toText.value = "";
    infoText.value = "";
  });

  // Mock posts
  const mockPosts = [
    createPostHtml("Ada", "Owerri, Imo", "Enugu, Enugu", "Douglas Rd → Ogbete Market", "Going to shop this weekend"),
    createPostHtml("Chuks", "Ikeja, Lagos", "Lekki, Lagos", "Computer Village → Lekki Phase 1", "Any tips for traffic?"),
  ];

  mockPosts.forEach((html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    feed.appendChild(div);
  });

  addRouteListeners();
});
