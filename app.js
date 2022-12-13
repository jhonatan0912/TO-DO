let form = document.getElementById("form");

let itemsContainer = document.getElementById("items-container");


let count = 0;
let countTemplate = `<div><div>${count + 1}</div></div>`

form.addEventListener("submit", e => {
  e.preventDefault();
  let itemValue = document.getElementById("input").value;
  let item = document.createElement("div");
  item.innerHTML = `
  <div class="flex justify-between items-center border-b p-3">
    <div>${itemValue}</div>
    <div>
      <img src="./images/icon-cross.svg" class="btn-delete cursor-pointer">
    </div>
  </div>
  ${countTemplate}
  `;
  itemsContainer.append(item)
})


let btnDelete = document.querySelector(".btn-delete");

btnDelete.addEventListener("click", e => {
  console.log(e.target.parentElement.parentElement.remove());
})



