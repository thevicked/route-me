document.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("post-btn");
  const input = document.getElementById("route-input");
  const feed = document.getElementById("feed");

  postBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    const post = document.createElement("div");
    post.textContent = input.value;
    feed.prepend(post);

    input.value = "";
  });
});