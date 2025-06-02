document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";
  document.getElementById("greeting").textContent = `Hi, ${user}`;

  const postForm = document.getElementById("postForm");
  postForm.addEventListener("submit", async (e) => {
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
    const files = Array.from(imageInput.files);

    // Convert each file to base64
    const images = await Promise.all(files.map(file => toBase64(file)));

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
      images,
      timestamp: new Date().toISOString()
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "feed.html";
  });

  // Helper to convert a File to base64 string
  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
});