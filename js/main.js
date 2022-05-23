let itemSelected = "";

const items = document.getElementsByClassName("ranking__score__element");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener(
    "click",
    function () {
      items[i].classList.toggle("button__active");
      itemSelected = items[i].innerHTML;
      console.log(itemSelected);
      //remove class in the other elements in the array ranking__score
      const options = document.getElementsByClassName(
        "ranking__score__element"
      );
      for (let index = 0; index < options.length; index++) {
        if (index !== i) {
          options[index].classList.remove("button__active");
        }
      }
    },
    false
  );
}

//close the first card and show the second card
document.getElementById("submit").addEventListener("click", function () {
  if (itemSelected) {
    document.getElementById("selected").innerHTML =
      "You selected " + itemSelected + " out of 5";
      document.getElementById("card__one").style.display = "none";
      document.getElementById("card__two").style.display = "block";
  }else{
    Swal.fire({
        text: 'Please select an option.',
        icon: 'error',
        confirmButtonText: 'ok',
        buttons:{
            confirm: "Confirm"
        }
      })
  }
});


//Closed second card and show the first card
document.getElementById("closed").addEventListener("click", function () {


//remove the class selected in the icons
const options = document.getElementsByClassName(
    "ranking__score__element"
  );
  for (let index = 0; index < options.length; index++) {
      options[index].classList.remove("button__active");
  }

  document.getElementById("card__two").style.display = "none";
  document.getElementById("card__one").style.display = "block";
});
