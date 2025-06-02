document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";
  document.getElementById("greeting").textContent = `Hi, ${user}`;

  const postForm = document.getElementById("postForm");
  const imageInput = document.getElementById("imageUpload");
  const previewContainer = document.getElementById("imagePreview");

  let selectedImages = []; // Array of { file, caption }

  imageInput.addEventListener("change", () => {
    const newFiles = Array.from(imageInput.files);
    selectedImages.push(...newFiles.map(f => ({ file: f, caption: "" })));
    renderPreviews();
    imageInput.value = ""; // reset to allow reselecting same files later
  });

  function renderPreviews() {
    previewContainer.innerHTML = "";

    selectedImages.forEach((item, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const previewDiv = document.createElement("div");
        previewDiv.className = "preview-container";

        const img = document.createElement("img");
        img.src = e.target.result;
        img.className = "preview-thumb";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = () => {
          selectedImages.splice(index, 1);
          renderPreviews();
        };

        previewDiv.appendChild(img);
        previewDiv.appendChild(removeBtn);
        
        previewContainer.appendChild(previewDiv);
      };
      reader.readAsDataURL(item.file);
    });
  }

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

    console.log("Selected images:", selectedImages);

let images;
  try {
    images = await Promise.all(
      selectedImages.map(({ file, caption }) =>
        toBase64(file).then(dataUrl => ({ dataUrl, caption }))
      )
    );
  } catch (error) {
    alert("Error reading images. Please try again.");
    console.error(error);
    return; // stop submission if image processing failed
  }

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

  
function toBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null); // prevent error if file is undefined
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject("Failed to read file");
    reader.readAsDataURL(file);
  });

  }
});