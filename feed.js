document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("postFeed");
  let userPosts = JSON.parse(localStorage.getItem("posts")) || [];

  const mockPosts = [
    {
      fromState: "Lagos", fromCity: "Yaba",
      toState: "Lagos", toCity: "Lekki",
      landmark: "Unilag Gate", extra: "Going for a show",
      timestamp: new Date().toISOString()
    },
    {
      fromState: "Abuja", fromCity: "Wuse",
      toState: "Abuja", toCity: "Asokoro",
      landmark: "Wuse Market", extra: "Meeting a friend",
      timestamp: new Date().toISOString()
    }
  ];

  const allPosts = [...userPosts, ...mockPosts];

  allPosts.forEach((p, i) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <p><strong>From:</strong> ${p.fromCity}, ${p.fromState}</p>
      <p><strong>To:</strong> ${p.toCity}, ${p.toState}</p>
      <p><strong>Landmark:</strong> ${p.landmark}</p>
      <p><strong>Details:</strong> ${p.extra}</p>
      <input type="text" placeholder="Suggest a route..." id="comment${i}" />
      <button onclick="alert('Thanks for your suggestion!')">Route</button>
      <hr/>
    `;
    feed.appendChild(postDiv);
  });
});