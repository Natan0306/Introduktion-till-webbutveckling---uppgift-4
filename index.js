
//  variables
var knapp = document.querySelector("button");
var inputFalt = document.querySelector("input");
var list = document.querySelector("#todoList");
var fel = document.querySelector("#fel")
var antalKlara = document.querySelector("#antalKlara");
var uppgifter = [];

// add eventListner to button
knapp.addEventListener("click", function () {
   if (inputFalt.value === "") {
    fel.textContent = "You have to write somthing!";
  
   } else {
    fel.textContent = "";
    
    var nyttElement = document.createElement("li");      // variable
    nyttElement.textContent = inputFalt.value;
    list.appendChild(nyttElement);
    
    nyttElement.addEventListener("click", function () {
    this.classList.add("klar");
    antalKlara.textContent = document.querySelectorAll(".klar").length + " completed";
    });

    var uppgiftObjekt = {
      text: inputFalt.value,
      klar: false
    };

    uppgifter.push(uppgiftObjekt);

    inputFalt.value = "";
   }

});
   

