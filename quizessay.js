window.onload = function() {
   const btnText = document.getElementById("chtext");
   const btnBg = document.getElementById("bccol");
   const text = document.getElementById("text1");
   const body = document.getElementById("bd");
   const title = document.querySelector("h1");
   const basket = document.getElementById("basket");
   const basketStat = document.getElementById("basketstat");
   const images = document.querySelectorAll("img");

   const popup = document.getElementById("popup");
   const colorPicker = document.getElementById("colorPicker");
   const okBtn = document.getElementById("okBtn");
   const cancelBtn = document.getElementById("cancelBtn");

   let currentAction = null;
   let flowerCount = 0;

   function openPopup(action) {
      currentAction = action;
      popup.style.display = "block";
      colorPicker.value = "#000000";
   }

   function closePopup() {
      popup.style.display = "none";
   }

   okBtn.addEventListener("click", function() {
      const color = colorPicker.value;
      if (currentAction === "text") {
         text.style.color = color;
         title.style.color = color;
      } else if (currentAction === "bg") {
         body.style.backgroundColor = color;
      }
      closePopup();
   });

   cancelBtn.addEventListener("click", function() {
      closePopup();
   });

   btnText.addEventListener("click", function() {
      openPopup("text");
   });

   btnBg.addEventListener("click", function() {
      openPopup("bg");
   });

   images.forEach(img => {
      img.addEventListener("click", function() {
         const clone = img.cloneNode(true);
         clone.style.margin = "0";
         clone.style.padding = "0";
         clone.style.display = "inline-block";
         basket.appendChild(clone);
         flowerCount++;
         basketStat.textContent = `The flower basket currently contains ${flowerCount} flower${flowerCount > 1 ? 's' : ''}.`;
      });
   });
};
