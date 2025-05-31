const nigeriaData = {
  "Lagos": ["Ikeja", "Lekki", "Yaba"],
  "Abuja": ["Garki", "Wuse", "Asokoro"],
  "Kano": ["Nassarawa", "Fagge", "Tarauni"]
};

function populateStates(stateSelectId, citySelectId) {
  const stateSelect = document.getElementById(stateSelectId);
  const citySelect = document.getElementById(citySelectId);
  stateSelect.innerHTML = "";
  for (let state in nigeriaData) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  }
  stateSelect.addEventListener("change", () => {
    populateCities(stateSelectId, citySelectId);
  });
  populateCities(stateSelectId, citySelectId);
}

function populateCities(stateSelectId, citySelectId) {
  const state = document.getElementById(stateSelectId).value;
  const citySelect = document.getElementById(citySelectId);
  citySelect.innerHTML = "";
  nigeriaData[state].forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}