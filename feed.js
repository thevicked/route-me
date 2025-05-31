
document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("feed");

  function createPostHtml(post) {
    const from = `${post.from.city}, ${post.from.state}`;
    const to = `${post.to.city}, ${post.to.state}`;
    return `
      <div class="post">
        <strong>${post.username}</strong>:<br/>
        From <em>${from}</em> to <em>${to}</em><br/>
        Landmark: ${post.from.text} → ${post.to.text}<br/>
        <small>${post.info}</small>
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

  let posts = JSON.parse(localStorage.getItem("posts") || "[]");

  // If no posts, add mock posts
  if (posts.length === 0) {
    posts = [
      {
        username: "Ada",
        from: { state: "Imo", city: "Owerri", text: "Douglas Rd" },
        to: { state: "Enugu", city: "Enugu", text: "Ogbete Market" },
        info: "Going to shop this weekend"
      },
      {
        username: "Chuks",
        from: { state: "Lagos", city: "Ikeja", text: "Computer Village" },
        to: { state: "Lagos", city: "Lekki", text: "Lekki Phase 1" },
        info: "Any tips for traffic?"
      }
    ];
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = createPostHtml(post);
    feed.appendChild(div);
  });

  addRouteListeners();
});
