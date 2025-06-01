document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("postFeed");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  const mockPosts = [
    {
      name: "Jane Doe",
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
      fromState: "Lagos", fromCity: "Ikeja", landmarkFrom: "Computer Village",
      toState: "Lagos", toCity: "Lekki", landmarkTo: "Lekki Toll Gate",
      extra: "Going for a show"
    },
    {
      name: "John Smith",
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
      fromState: "Abuja", fromCity: "Wuse", landmarkFrom: "Wuse Market",
      toState: "Abuja", toCity: "Asokoro", landmarkTo: "Aso Villa",
      extra: "Meeting a friend"
    }
  ];

  const allPosts = [...posts, ...mockPosts];

  allPosts.forEach((p, i) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${p.profilePic}" alt="Profile Picture" class="avatar"/>
        <strong>${p.name}</strong>
      </div>
</br>
      <p><strong>From:</strong> ${p.fromCity}, ${p.fromState}</p>
      <p><strong>Landmark:</strong> ${p.landmarkFrom}</p>
</br>
      <p><strong>To:</strong> ${p.toCity}, ${p.toState}</p>
      <p><strong>Landmark:</strong> ${p.landmarkTo}</p>
</br>
      <p><strong>Details:</strong> ${p.extra}</p>
</br>
      <div class="route-box">
        <input type="text" placeholder="Suggest a route..." class="route-input"/>
        <button class="route-btn">Route</button>
      </div>
      <div class="comments"></div>
      <hr/>
    `;
    feed.appendChild(postDiv);
  });

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
});