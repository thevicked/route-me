
const statesAndCities = {
  Abia: ["Umuahia", "Aba"],
  Adamawa: ["Yola", "Numan"],
  AkwaIbom: ["Uyo", "Eket"],
  Anambra: ["Awka", "Onitsha"],
  Bauchi: ["Bauchi", "Misau"],
  Bayelsa: ["Yenagoa", "Brass"],
  Benue: ["Makurdi", "Gboko"],
  Borno: ["Maiduguri", "Biu"],
  CrossRiver: ["Calabar", "Ikom"],
  Delta: ["Asaba", "Warri"],
  Ebonyi: ["Abakaliki", "Afikpo"],
  Edo: ["Benin City", "Ekpoma"],
  Ekiti: ["Ado-Ekiti", "Ikere"],
  Enugu: ["Enugu", "Nsukka"],
  Gombe: ["Gombe", "Kaltungo"],
  Imo: ["Owerri", "Okigwe"],
  Jigawa: ["Dutse", "Hadejia"],
  Kaduna: ["Kaduna", "Zaria"],
  Kano: ["Kano", "Wudil"],
  Katsina: ["Katsina", "Daura"],
  Kebbi: ["Birnin Kebbi", "Argungu"],
  Kogi: ["Lokoja", "Okene"],
  Kwara: ["Ilorin", "Offa"],
  Lagos: ["Ikeja", "Lekki", "Epe", "Badagry", "Yaba"],
  Nasarawa: ["Lafia", "Keffi"],
  Niger: ["Minna", "Bida"],
  Ogun: ["Abeokuta", "Ijebu-Ode"],
  Ondo: ["Akure", "Owo"],
  Osun: ["Osogbo", "Ife"],
  Oyo: ["Ibadan", "Ogbomoso"],
  Plateau: ["Jos", "Pankshin"],
  Rivers: ["Port Harcourt", "Bonny", "Eleme"],
  Sokoto: ["Sokoto", "Tambuwal"],
  Taraba: ["Jalingo", "Bali"],
  Yobe: ["Damaturu", "Potiskum"],
  Zamfara: ["Gusau", "Kaura"]
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
