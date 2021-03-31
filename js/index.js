// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  // Get DOM Element
  let price = document.querySelector(".price span");
  let quantity = document.querySelector(".quantity input");
  let subTotal = document.querySelector(".subtotal span");

  let priceDigit = price.innerHTML;
  let quantityDigit = Number(quantity.value);

  let total = quantityDigit * priceDigit;

  subTotal.innerHTML = total;
  return total;
}
// updateSubtotal();

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // ITERATION 2

  let productSum = 0;

  let allProducts = document.querySelectorAll(".product");

  allProducts.forEach((el) => {
    productSum += updateSubtotal(el);
  });

  // updateSubtotal(product);

  // ITERATION 3
  let totalVal = document.querySelector("#total-value");
  totalVal.innerText = productSum;
}
calculateAll();
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // const singleProduct = document.querySelector(".product");
  // let newProduct = document.createElement("tr");
  // newProduct.innerHTML = `${singleProduct.innerHTML}`;
  // let addProduct = document.querySelector("table#cart");
  // addProduct.appendChild(newProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  // const createProduct = document.querySelector("#create");
  // createProduct.addEventListener("click", createProduct);
});
