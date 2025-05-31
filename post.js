document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("username") || "User";
  document.getElementById("greeting").textContent = `Hi, ${user}`;

  const postBtn = document.getElementById("post-btn");
  const fromInput = document.getElementById("from-input");
  const toInput = document.getElementById("to-input");
  const feed = document.getElementById("feed");

  postBtn.addEventListener("click", () => {
    const from = fromInput.value.trim();
    const to = toInput.value.trim();

    if (!from || !to) return;

    const post = document.createElement("div");
    post.innerHTML = `<strong>${user}</strong>: From <em>${from}</em> to <em>${to}</em>`;
    feed.prepend(post);

    fromInput.value = "";
    toInput.value = "";
  });
});