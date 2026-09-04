const fetchUrl = `https://kea-alt-del.dk/kata-distortion/`;
const datanumber = document.querySelector(".number");
let gammeltTal;

function getCategories() {
  fetch(fetchUrl).then((res) => res.json().then((category) => showCategories(category)));
}
function showCategories(category) {
  datanumber.innerHTML = `<h3>${category.inQueue}</h3>`;
  setTimeout(() => {
    datanumber.classList.add("changesize");

    setTimeout(() => {
      datanumber.classList.remove("changesize");
    }, 1000);
  }, 10000);
}

setInterval(() => {
  getCategories();
}, 10000);
getCategories();
