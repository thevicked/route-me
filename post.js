const statesAndCities = {
  Lagos: ["Ikeja", "Yaba", "Lekki", "Epe", "Badagry"],
  Abuja: ["Garki", "Wuse", "Maitama", "Asokoro"],
  Rivers: ["Port Harcourt", "Bonny", "Eleme"],
  Enugu: ["Enugu", "Nsukka"],
  Kano: ["Kano", "Wudil"],
};

function populateStates(stateSelectId, citySelectId) {
  const stateSelect = document.getElementById(stateSelectId);
  const citySelect = document.getElementById(citySelectId);

  stateSelect.innerHTML = `<option value="">Select State</option>`;
  Object.keys(statesAndCities).forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });

  stateSelect.addEventListener("change", () => {
    const selected = stateSelect.value;
    citySelect.innerHTML = `<option value="">Select City</option>`;
    if (statesAndCities[selected]) {
      statesAndCities[selected].forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("greeting").textContent = `Hi, ${username}`;

  populateStates("from-state", "from-city");
  populateStates("to-state", "to-city");

  const postBtn = document.getElementById("post-btn");
  const fromText = document.getElementById("from-text");
  const toText = document.getElementById("to-text");
  const infoText = document.getElementById("info-text");
  const feed = document.getElementById("feed");

  postBtn.addEventListener("click", () => {
    const fromState = document.getElementById("from-state").value;
    const fromCity = document.getElementById("from-city").value;
    const toState = document.getElementById("to-state").value;
    const toCity = document.getElementById("to-city").value;

    const post = document.createElement("div");
    post.innerHTML = `
      <strong>${username}</strong>:
      From <em>${fromCity}, ${fromState}</em>
      to <em>${toCity}, ${toState}</em><br/>
      Landmark: ${fromText.value} → ${toText.value}<br/>
      <small>${infoText.value}</small>
    `;
    feed.prepend(post);

    fromText.value = "";
    toText.value = "";
    infoText.value = "";
  });
});