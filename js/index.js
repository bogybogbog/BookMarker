var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var tbody = document.getElementById("tbody");
var bookList;

if (localStorage.getItem("products") == null) {
  bookList = [];
} else {
  bookList = JSON.parse(localStorage.getItem("products"));
  display(bookList);
}

function addBook() {
  var product = {
    name: siteNameInput.value,
    url: siteURLInput.value,
  };
  bookList.push(product);
  localStorage.setItem("products", JSON.stringify(bookList));
  console.log(bookList);
  clear();
  display(bookList);
}

function display(arr) {
  cartona = "";

  for (let i = 0; i < bookList.length; i++) {
    cartona += `<tr>           
            <td>${1 + i}</td>
            <td>${bookList[i].name}</td>
            <td><a href"${
              bookList[i].url
            }"><button class="btn btn-visit btn-sm w-50">Visit <i class="fa-solid fa-eye pe-2 ms-3"></i></button></a></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-outline-danger btn-sm w-50">Delete <i class="fas fa-trash-alt ms-3"></i></button></td>
          </tr>`;
    console.log(i);
  }
  tbody.innerHTML = cartona;
}
// function openNewPage(page) {
//   var x = window.open(`https://${page}`, "_blank");
//   console.log(x);
// }
function clear() {
  siteNameInput.value = null;
  siteURLInput.value = null;
}
function deleteBook(index) {
  bookList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(bookList));
  display(bookList);
}
function validate(element) {
  var redex = {
    siteName: /^[a-z]{3}.{0,}$/i,
    siteURL: /^www\..{0,}\.com$/,
  };
  console.log(redex[element.id]);

  if (redex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
