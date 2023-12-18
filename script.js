

document.addEventListener("DOMContentLoaded", function () {
  var divs = document.querySelectorAll(".block");

 
  divs.forEach(function (div) {
    div.addEventListener("click", function (e) {
      // Deactivate all divs
      deactivateDivs();

      div.classList.add("active");
      div.querySelector('input[type="radio"]').checked = true;

     
      const pairCost = div.querySelector("#pair_cost");
      const newDiv = createNewDiv();
      const innerDiv = createInnerDiv();
      let arr = ["size", "color"];
      for (let i = 1; i <= 2; i++) {
        let SCDiv = createSCDiv(arr[i - 1], i === 2);
        innerDiv.append(SCDiv);
      }

      newDiv.append(innerDiv);

      
      pairCost.append(newDiv);
    });
  });

  function deactivateDivs() {
    divs.forEach(function (item) {
      item.classList.remove("active");
      item.querySelector('input[type="radio"]').checked = false;

      
      const divs = item.querySelectorAll(".new-div");
      divs.forEach(function (div) {
        div.remove();
      });
    });
  }

  function createNewDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div", "center-align");
    return newDiv;
  }

  function createInnerDiv() {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("Innerdiv");
    return innerDiv;
  }

  function createSCDiv(type, isColor) {
    const SCDiv = document.createElement("div");
    SCDiv.classList.add("dropdown-block");
    let para = document.createElement("p");
    para.classList.add("para");
    para.innerHTML = type;
    SCDiv.append(para);

    if (isColor) {
      for (let i = 1; i <= 2; i++) {
        let select = document.createElement("select");
        let option = document.createElement("option");
        option.classList.add('option');
        option.value = i === 1 ? "Colour" : "Colour";
        option.text = i === 1 ? "Colour" : "Colour";

        select.appendChild(option);
        SCDiv.appendChild(select);
      }
    } else {
      for (let j = 1; j <= 2; j++) {
        let select = document.createElement("select");
        let option = document.createElement("option");
        option.classList.add('option');
        option.value = ["S", "S", "L"][j - 1];
        option.text = ["S", "S", "L"][j - 1];

        select.appendChild(option);
        SCDiv.appendChild(select);
      }
    }

    return SCDiv;
  }
});
