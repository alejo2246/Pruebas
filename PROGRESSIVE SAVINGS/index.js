let saved = 0;
let selectedNumber = new Array();

const documentFragment = document.createDocumentFragment();
const subtitle = document.querySelector(".subtitle");
const container = document.querySelector(".container");

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
  localStorage.setItem("selectedDays", JSON.stringify(selectedNumber));
  localStorage.setItem("savedMoney", JSON.stringify(saved));
  subtitle.innerHTML = `Total money saved: ${saved}`;
};

const getData = () => {
  let Data = JSON.parse(localStorage.getItem("selectedDays"));
  saved = JSON.parse(localStorage.getItem("savedMoney"));
  subtitle.innerHTML = `Total money saved: ${saved}`;
  selectedNumber = [...Data];
  selectedNumber.forEach(elemento => {
    document.getElementById(`item-${elemento}`).classList.toggle("green");
  })
};

window.onload = getData;

for (let i = 1; i <= 365; i++) {
  let div = document.createElement("DIV");
  div.setAttribute("id", `item-${i}`);
  div.classList.add("flex-item");
  div.innerHTML = i;
  div.addEventListener("click", () => {
    selectedItem(i);
  });
  documentFragment.appendChild(div);
}

container.appendChild(documentFragment);
