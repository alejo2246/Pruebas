import { insert, getData } from "./firestore.js";

const documentFragment = document.createDocumentFragment();
const subtitle = document.querySelector(".subtitle");
const container = document.querySelector(".container");

let saved = 0;
let selectedNumber = new Array();

async function saveData(item, array) {
  try {
    await insert(item, array);
  } catch (error) {
    console.log(error);
  }
}
const selectedItem = (item) => {
  document.getElementById(`item-${item}`).classList.toggle("green");
  if (selectedNumber.includes(item)) {
    let nuevo = selectedNumber.filter((elemento) => elemento != item);
    selectedNumber = [...nuevo];
    saved = saved - item * 100;
  } else {
    selectedNumber.push(item);
    saved = saved + item * 100;
  }
  saveData(saved, selectedNumber);
  // localStorage.setItem("selectedDays", JSON.stringify(selectedNumber));
  subtitle.innerHTML = `Total money saved: $${saved}`;
};

window.addEventListener('DOMContentLoaded', async (e) => {
  e.preventDefault();
  let a = await getData();
  saved = a.data().money
  let Data = [...a.data().numbers]
  subtitle.innerHTML = `Total money saved: $${saved}`;
  selectedNumber = [...Data];
  selectedNumber.forEach((elemento) => {
    document.getElementById(`item-${elemento}`).classList.toggle("green");
  });  
});

for (let i = 1; i <= 365; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("id", `item-${i}`);
  div.classList.add("flex-item");
  div.innerHTML = i;
  div.addEventListener("click", (e) => {
    e.preventDefault;
    selectedItem(i);
  });
  documentFragment.appendChild(div);
}

container.appendChild(documentFragment);
