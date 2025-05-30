document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input");
  const posts = document.getElementById("posts");

  const newPost = document.createElement("div");
  newPost.textContent = input.value;
  posts.appendChild(newPost);

  input.value = "";
});
