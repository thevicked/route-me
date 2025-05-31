
document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("postFeed");
  let userPosts = JSON.parse(localStorage.getItem("posts")) || [];

  const mockPosts = [
    {
      name: "Jane Doe",
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
      fromState: "Lagos", fromCity: "Yaba", landmark: "Unilag Gate",
      toState: "Lagos", toCity: "Lekki", extra: "Going for a show",
      timestamp: new Date().toISOString()
    },
    {
      name: "John Smith",
      profilePic: "https://www.w3schools.com/howto/img_avatar.png",
      fromState: "Abuja", fromCity: "Wuse", landmark: "Wuse Market",
      toState: "Abuja", toCity: "Asokoro", extra: "Meeting a friend",
      timestamp: new Date().toISOString()
    }
  ];

  const allPosts = [...userPosts, ...mockPosts];

  allPosts.forEach((p, i) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${p.profilePic}" alt="Profile Picture" width="40" style="border-radius: 50%;" />
        <strong>${p.name || "You"}</strong>
      </div>
      <p><strong>From:</strong> ${p.fromCity}, ${p.fromState}</p>
      <p><strong>Landmark:</strong> ${p.landmark}</p>
      <p><strong>To:</strong> ${p.toCity}, ${p.toState}</p>
      <p><strong>Details:</strong> ${p.extra}</p>
      <input type="text" placeholder="Suggest a route..." id="comment${i}" />
      <button onclick="alert('Thanks for your suggestion!')">Route</button>
      <hr/>
    `;
    feed.appendChild(postDiv);
  });
});
