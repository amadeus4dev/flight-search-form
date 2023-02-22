function dynamicDropDown(listIndex) {

  document.getElementById("infants").length = 0;
  document.getElementById("children").length = 0;

  for (let i = 0; i < Number(listIndex) + 1; i++) {
    document.getElementById("infants").options[i] = new Option(i.toString(), i);
  }

  for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
    document.getElementById("children").options[i] = new Option(i.toString(), i);
  }
}