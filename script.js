const form = document.getElementById("flight-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const origin = form.elements.origin.value;
  const destination = form.elements.destination.value;
  const departureDate = form.elements.departureDate.value;
  const returnDate = form.elements.returnDate.value;

});
