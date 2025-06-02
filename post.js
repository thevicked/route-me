document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";
  document.getElementById("greeting").textContent = `Hi, ${user}`;

  const postForm = document.getElementById("postForm");
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fromState = document.getElementById("fromState").value;
    const fromCity = document.getElementById("fromCity").value;
    const landmarkFrom = document.getElementById("landmarkFrom").value;
    const toSame = document.getElementById("sameCity").checked;
    const toState = toSame ? fromState : document.getElementById("toState").value;
    const toCity = toSame ? fromCity : document.getElementById("toCity").value;
    const landmarkTo = document.getElementById("landmarkTo").value;
    const extra = document.getElementById("extra").value;
    const imageInput = document.getElementById("imageUpload");
    const file = imageInput.files[0];

    const savePost = (imageData = null) => {
      const post = {
        name: user,
        profilePic: "https://www.w3schools.com/howto/img_avatar.png",
        fromState,
        fromCity,
        landmarkFrom,
        toState,
        toCity,
        landmarkTo,
        extra,
        image: imageData,
        timestamp: new Date().toISOString()
      };

      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.unshift(post);
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.href = "feed.html";
    };

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => savePost(reader.result);
      reader.readAsDataURL(file);
    } else {
      savePost();
    }
  });
});