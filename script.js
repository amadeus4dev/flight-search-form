function validateForm() {
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;
  var infants = document.getElementById("infants").value;
  var infantsError = document.getElementById("infantsError");
  if ((parseInt(children) + parseInt(infants) + parseInt(adults)) > 18) {
    infantsError.innerHTML = "Number of passengers can't exceed 18";
    return false;
  }
  infantsError.innerHTML = "";
  return true;
}

function dynamicDropDown(listIndex) {
  const selectedChildren = document.getElementById("children").value;
  const selectedInfants = document.getElementById("infants").value;

  for (let i = 0; i < Number(listIndex) + 1; i++) {
    document.getElementById("infants").options[i] = new Option(i.toString(), i);
  }

  for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
    document.getElementById("children").options[i] = new Option(i.toString(), i);
  }

  document.getElementById("children").value = selectedChildren;
  document.getElementById("infants").value = selectedInfants;
}