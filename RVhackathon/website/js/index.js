document
  .getElementById("cost-input")
  .addEventListener("oninput", cost_input_update);

function cost_slider_update() {
  document.getElementById("cost-label").innerHTML =
    'Cost: <i class="bi bi-currency-dollar"></i>' +
    document.getElementById("cost-slider").value;
  document.getElementById("cost-input").value =
      document.getElementById("cost-slider").value;
}
function cost_input_update() {
  document.getElementById("cost-label").innerHTML =
    'Cost: <i class="bi bi-currency-dollar"></i>' +
    document.getElementById("cost-input").value;
  document.getElementById("cost-slider").value =
    document.getElementById("cost-input").value;
}
function discount_update() {
    document.getElementById("discount-label").innerHTML =
      "Discount: " + document.getElementById("discount-input").value + "%";
  }

  function filter_visibility() {
    console.log("inside");
    if (window.innerWidth > 992) {
      document.getElementById("filter").classList.add("show");
    }
  }window.addEventListener("resize", filter_visibility);

  

  