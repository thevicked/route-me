const nigeriaData = {
  Abia: ["Umuahia", "Aba", "Ohafia", "Arochukwu", "Other"],
  Adamawa: ["Yola", "Jimeta", "Mubi", "Numan", "Other"],
  AkwaIbom: ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Other"],
  Anambra: ["Awka", "Onitsha", "Nnewi", "Ekwulobia", "Other"],
  Bauchi: ["Bauchi", "Azare", "Misau", "Jama'are", "Other"],
  Bayelsa: ["Yenagoa", "Brass", "Ogbia", "Sagbama", "Other"],
  Benue: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala", "Other"],
  Borno: ["Maiduguri", "Biu", "Damboa", "Ngala", "Other"],
  CrossRiver: ["Calabar", "Ikom", "Obudu", "Ogoja", "Other"],
  Delta: ["Asaba", "Warri", "Sapele", "Ughelli", "Other"],
  Ebonyi: ["Abakaliki", "Afikpo", "Onueke", "Ikwo", "Other"],
  Edo: ["Benin City", "Auchi", "Ekpoma", "Igueben", "Other"],
  Ekiti: ["Ado-Ekiti", "Ikere", "Ise", "Omuo", "Other"],
  Enugu: ["Enugu", "Nsukka", "Awgu", "Udi", "Other"],
  Gombe: ["Gombe", "Billiri", "Kaltungo", "Dukku", "Other"],
  Imo: ["Owerri", "Orlu", "Okigwe", "Mbaise", "Other"],
  Jigawa: ["Dutse", "Hadejia", "Kazaure", "Gumel", "Other"],
  Kaduna: ["Kaduna", "Zaria", "Kafanchan", "Soba", "Other"],
  Kano: ["Kano", "Wudil", "Gaya", "Bichi", "Other"],
  Katsina: ["Katsina", "Daura", "Funtua", "Malumfashi", "Other"],
  Kebbi: ["Birnin Kebbi", "Argungu", "Zuru", "Yauri", "Other"],
  Kogi: ["Lokoja", "Okene", "Idah", "Kabba", "Other"],
  Kwara: ["Ilorin", "Offa", "Omu-Aran", "Lafiagi", "Other"],
  Lagos: ["Ikeja", "Yaba", "Lekki", "Surulere", "Other"],
  Nasarawa: ["Lafia", "Keffi", "Akwanga", "Nasarawa", "Other"],
  Niger: ["Minna", "Bida", "Suleja", "Kontagora", "Other"],
  Ogun: ["Abeokuta", "Ijebu-Ode", "Sagamu", "Ota", "Other"],
  Ondo: ["Akure", "Ondo", "Owo", "Ikare", "Other"],
  Osun: ["Oshogbo", "Ife", "Ilesa", "Ikirun", "Other"],
  Oyo: ["Ibadan", "Ogbomoso", "Oyo", "Iseyin", "Other"],
  Plateau: ["Jos", "Barkin Ladi", "Pankshin", "Shendam", "Other"],
  Rivers: ["Port Harcourt", "Bonny", "Obio-Akpor", "Eleme", "Other"],
  Sokoto: ["Sokoto", "Tambuwal", "Gwadabawa", "Bodinga", "Other"],
  Taraba: ["Jalingo", "Wukari", "Bali", "Serti", "Other"],
  Yobe: ["Damaturu", "Potiskum", "Nguru", "Gashua", "Other"],
  Zamfara: ["Gusau", "Kaura Namoda", "Talata Mafara", "Anka", "Other"],
  FCT: ["Abuja", "Gwagwalada", "Kubwa", "Bwari", "Other"]
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
document.getElementById("toState").addEventListener("change", () => {
  populateCities("toState", "toCity");
});
  document.getElementById("fromCity").addEventListener("change", () => {
    if (document.getElementById("sameCity").checked) {
      document.getElementById("toCity").value = document.getElementById("fromCity").value;
    }
  });

  document.getElementById("sameCity").addEventListener("change", (e) => {
  const disabled = e.target.checked;
  const fromState = document.getElementById("fromState").value;
  const fromCity = document.getElementById("fromCity").value;

  document.getElementById("toState").disabled = disabled;
  document.getElementById("toCity").disabled = disabled;

  if (disabled) {
    document.getElementById("toState").value = fromState;
    populateCities("toState", "toCity");
    document.getElementById("toCity").value = fromCity;
  } else {
    // Reset toState and toCity when unchecking
    document.getElementById("toState").value = "";
    document.getElementById("toCity").innerHTML = '<option value="">Select City</option>';
  }
});
});