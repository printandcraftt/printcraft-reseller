function applyReseller(e){
  e.preventDefault();
  alert("Application sent! 💜");
}

// simulate reseller access
localStorage.setItem("reseller", "true");

if(localStorage.getItem("reseller") === "true"){
  document.querySelectorAll(".reseller")
    .forEach(el => el.classList.remove("hidden"));
}
