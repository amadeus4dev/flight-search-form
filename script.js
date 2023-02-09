function validateForm() {
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;
  var infants = document.getElementById("infants").value;
  var infantsError = document.getElementById("infantsError");
  if (parseInt(infants) > parseInt(adults)) {
      infantsError.innerHTML = "Number of infants cannot exceed number of adults";
      return false;
  }
  console.log(children + infants + adults)
  if ((parseInt(children) + parseInt(infants) + parseInt(adults)) > 18) {
      infantsError.innerHTML = "Number of passengers can't exceed 18";
      return false;
  }
  infantsError.innerHTML = "";
  return true;
}

function dynamicdropdown(listindex)
{

  document.getElementById("infants").length = 0;
  document.getElementById("children").length = 0;

  for (let i = 0; i < Number(listindex) + 1; i++){
    document.getElementById("infants").options[i]=new Option(i.toString(),i);
  }

  for (let i = 0; i < 9 - Number(listindex) + 1; i++){
    document.getElementById("children").options[i]=new Option(i.toString(),i);
  }

}