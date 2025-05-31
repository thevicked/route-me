const nigeriaData = {
  Lagos: ["Ikeja", "Yaba", "Lekki", "Surulere"],
  Abuja: ["Wuse", "Garki", "Asokoro", "Maitama"],
  Rivers: ["Port Harcourt", "Bonny", "Obio-Akpor", "Eleme"]
};

function populateStates(stateId) {
  const stateSelect = document.getElementById(stateId);
  stateSelect.innerHTML = '<option value="">Select State</option>';
  for (let state in nigeriaData) {
    stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
  }
}

function populateCities(stateId, cityId) {
  const state = document.getElementById(stateId).value;
  const citySelect = document.getElementById(cityId);
  citySelect.innerHTML = '<option value="">Select City</option>';
  if (nigeriaData[state]) {
    nigeriaData[state].forEach(city => {
      citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateStates("fromState");
  populateStates("toState");

  document.getElementById("fromState").addEventListener("change", () => {
    populateCities("fromState", "fromCity");
    if (document.getElementById("sameCity").checked) {
      document.getElementById("toState").value = document.getElementById("fromState").value;
      populateCities("toState", "toCity");
      document.getElementById("toCity").value = document.getElementById("fromCity").value;
    }
  });

  document.getElementById("fromCity").addEventListener("change", () => {
    if (document.getElementById("sameCity").checked) {
      document.getElementById("toCity").value = document.getElementById("fromCity").value;
    }
  });

  document.getElementById("sameCity").addEventListener("change", (e) => {
    const disabled = e.target.checked;
    document.getElementById("toState").disabled = disabled;
    document.getElementById("toCity").disabled = disabled;

    if (disabled) {
      document.getElementById("toState").value = document.getElementById("fromState").value;
      populateCities("toState", "toCity");
      document.getElementById("toCity").value = document.getElementById("fromCity").value;
    }
  });
});