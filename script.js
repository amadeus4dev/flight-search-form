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